import ServicePage from "./ServicePage";

const content = {
  path: "/fundraiser-comedian",
  eyebrow: "Fundraisers and Galas",
  title: "Comedian for Fundraisers and Gala Events",
  description: "Book Johnny Watson for fundraiser events, galas, community gatherings, and special-event comedy in New Jersey.",
  intro: "Johnny brings live stand-up comedy to fundraiser and gala programs that want a memorable entertainment segment.",
  highlights: [
    "A clear entertainment segment that can fit into a larger event program.",
    "Advance communication about timing, audience, event format, and venue details.",
    "Performance clips available before booking.",
    "A direct inquiry process for organizers and venues.",
  ],
  bestFor: ["Fundraiser events", "Gala programs", "Benefit events", "Community organizations", "Special event programs"],
  localNote: "Johnny is based in New Jersey and can consider fundraiser and gala inquiries across the region based on availability and event details.",
  planningTitle: "Plan the comedy around the event program",
  planningCopy: [
    "Fundraisers and galas often combine multiple program elements, so it helps to share the event date, venue, approximate audience size, schedule, and the point where you want live comedy to appear.",
    "Organizers can review Johnny's performance clips first, then use the inquiry form to provide the event details. The goal is a clear conversation about timing, audience, and availability before anything is confirmed.",
  ],
  faqs: [
    { question: "What fundraiser details should I send?", answer: "Include the date, location, approximate audience size, event schedule, type of organization, and where the comedy performance would fit into the program." },
    { question: "Can our committee review performance clips first?", answer: "Yes. The website includes performance clips so organizers can review Johnny's stand-up style before sending a booking inquiry." },
    { question: "What kinds of events can I inquire about?", answer: "Suitable inquiries can include fundraisers, galas, benefit events, community organization programs, and other special-event formats." },
    { question: "Does sending an inquiry guarantee availability?", answer: "No. The inquiry starts the booking conversation. The date, location, event format, and other details still need to be reviewed." },
  ],
};

const FundraiserComedianPage = () => <ServicePage content={content} />;

export default FundraiserComedianPage;
