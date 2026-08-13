import ServicePage from "./ServicePage";

const content = {
  path: "/corporate-comedian",
  eyebrow: "Corporate Event Comedy",
  title: "Corporate Comedian for Events and Company Gatherings",
  description: "Book Johnny Watson for company events, team gatherings, celebrations, and live comedy in New Jersey.",
  intro: "Johnny brings relatable live stand-up comedy to company gatherings and professional events.",
  highlights: [
    "Clear pre-event communication about the audience, venue, schedule, and event format.",
    "Performance clips available before booking.",
    "A straightforward inquiry process for event organizers.",
    "New Jersey-based availability for suitable events.",
  ],
  bestFor: ["Company celebrations", "Team gatherings", "Awards dinners", "Holiday events", "Professional gatherings"],
  localNote: "Johnny is based in New Jersey and can consider company-event bookings throughout the region based on date and event details.",
};

const CorporateComedianPage = () => <ServicePage content={content} />;

export default CorporateComedianPage;
