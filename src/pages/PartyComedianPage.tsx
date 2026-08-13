import ServicePage from "./ServicePage";

const content = {
  path: "/party-comedian",
  eyebrow: "Private Parties and Special Events",
  title: "Comedian for Private Parties and Special Events",
  description: "Hire Johnny Watson for private parties, birthdays, celebrations, and live comedy entertainment in New Jersey.",
  intro: "Johnny brings a real stand-up comedy performance to private celebrations and special events that want a memorable live entertainment moment.",
  highlights: [
    "A live comedy performance that gives guests a shared entertainment experience.",
    "Booking details collected in advance, including date, location, audience size, and special requests.",
    "Performance clips available before booking.",
    "New Jersey-based availability for suitable celebrations and events.",
  ],
  bestFor: ["Birthday celebrations", "Private parties", "Anniversaries", "Community gatherings", "Special occasions"],
  localNote: "Based in Bloomingdale, New Jersey, Johnny can consider party and special-event inquiries throughout the surrounding region based on availability and event details.",
  planningTitle: "Make the comedy fit the celebration",
  planningCopy: [
    "Private events can vary a lot, so the most useful inquiry includes the date, location, approximate guest count, type of celebration, venue setup, and when you would like the comedy performance to happen.",
    "Watching Johnny's clips first can help you decide whether his stand-up style fits your guests. From there, the booking form gives you a simple way to share the event details for review.",
  ],
  faqs: [
    { question: "What private event details should I include?", answer: "Include the date, location, type of celebration, approximate guest count, venue setup, and any timing or special-request details that could affect the performance." },
    { question: "Can I watch Johnny before sending an inquiry?", answer: "Yes. The website includes performance clips so you can get a feel for Johnny's comedy style before contacting him about your event." },
    { question: "What kinds of celebrations can I inquire about?", answer: "You can inquire about birthdays, anniversaries, private parties, community gatherings, and other suitable special occasions." },
    { question: "Is the date reserved after I submit the form?", answer: "No. The inquiry starts the booking conversation. Availability and the event details still need to be reviewed before anything is confirmed." },
  ],
};

const PartyComedianPage = () => <ServicePage content={content} />;

export default PartyComedianPage;
