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
};

const PartyComedianPage = () => <ServicePage content={content} />;

export default PartyComedianPage;
