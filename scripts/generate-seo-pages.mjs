import fs from "node:fs";
import path from "node:path";

const pages = [
  {
    path: "/new-jersey-comedian",
    title: "Stand-Up Comedian for Hire in New Jersey | Johnny Watson",
    description: "Book New Jersey stand-up comedian Johnny Watson for corporate events, private parties, comedy clubs, fundraisers, and special appearances.",
    faqs: [
      ["What details should I include in a booking inquiry?", "Include the event date, location, event type, approximate audience size, schedule, and any important venue or program details. That gives Johnny the context needed to review availability."],
      ["Can I watch Johnny perform before I inquire?", "Yes. Performance clips are available on the website so organizers can get a feel for Johnny's stand-up style before sending a booking inquiry."],
      ["What types of New Jersey events can I inquire about?", "You can inquire about corporate events, private parties, comedy clubs, fundraisers, galas, community events, and other suitable live appearances."],
      ["Does submitting the form confirm the booking?", "No. The form starts the booking conversation. Availability and event details still need to be reviewed before a performance is confirmed."],
    ],
  },
  {
    path: "/corporate-comedian",
    title: "Corporate Comedian for Events and Company Gatherings | Johnny Watson",
    description: "Book Johnny Watson for company events, team gatherings, celebrations, and live corporate comedy in New Jersey.",
    faqs: [
      ["What company event details should I send?", "Send the date, venue or city, approximate audience size, event schedule, type of gathering, and where you would like the comedy performance to fit into the program."],
      ["Can we watch performance clips before booking?", "Yes. The website includes performance clips so organizers can review Johnny's comedy style before starting a booking inquiry."],
      ["What kinds of company events can I inquire about?", "Suitable inquiries can include company celebrations, team gatherings, awards dinners, holiday events, and other organized gatherings."],
      ["Does the inquiry form confirm the date?", "No. The form starts the booking conversation. The requested date, location, schedule, and event details still need to be reviewed."],
    ],
  },
  {
    path: "/party-comedian",
    title: "Comedian for Private Parties and Special Events | Johnny Watson",
    description: "Hire Johnny Watson for private parties, birthdays, celebrations, and live comedy entertainment in New Jersey.",
    faqs: [
      ["What private event details should I include?", "Include the date, location, type of celebration, approximate guest count, venue setup, and any timing or special-request details that could affect the performance."],
      ["Can I watch Johnny before sending an inquiry?", "Yes. The website includes performance clips so you can get a feel for Johnny's comedy style before contacting him about your event."],
      ["What kinds of celebrations can I inquire about?", "You can inquire about birthdays, anniversaries, private parties, community gatherings, and other suitable special occasions."],
      ["Is the date reserved after I submit the form?", "No. The inquiry starts the booking conversation. Availability and the event details still need to be reviewed before anything is confirmed."],
    ],
  },
  {
    path: "/fundraiser-comedian",
    title: "Comedian for Fundraisers and Gala Events | Johnny Watson",
    description: "Book Johnny Watson for fundraiser events, galas, community gatherings, and special-event comedy in New Jersey.",
    faqs: [
      ["What fundraiser details should I send?", "Include the date, location, approximate audience size, event schedule, type of organization, and where the comedy performance would fit into the program."],
      ["Can our committee review performance clips first?", "Yes. The website includes performance clips so organizers can review Johnny's stand-up style before sending a booking inquiry."],
      ["What kinds of events can I inquire about?", "Suitable inquiries can include fundraisers, galas, benefit events, community organization programs, and other special-event formats."],
      ["Does sending an inquiry guarantee availability?", "No. The inquiry starts the booking conversation. The date, location, event format, and other details still need to be reviewed."],
    ],
  },
];

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html was not found. Run this script after vite build.");
}

const template = fs.readFileSync(templatePath, "utf8");
const serviceTemplate = template.replace(/\s*<script id="homepage-events-schema"[\s\S]*?<\/script>/, "");
const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const page of pages) {
  const canonical = `https://therealjohnnywatson.com${page.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": "https://therealjohnnywatson.com/#website" },
        about: { "@id": "https://therealjohnnywatson.com/#johnny" },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  let html = serviceTemplate
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttr(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttr(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttr(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeAttr(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeAttr(page.description)}" />`);

  html = html.replace("</head>", `    <script id="service-page-schema" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>\n  </head>`);

  const outputDir = path.join(distDir, page.path.slice(1));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
}

console.log(`Generated ${pages.length} SEO landing page HTML files.`);
