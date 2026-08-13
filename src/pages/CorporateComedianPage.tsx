import ServicePage from "./ServicePage";

const content = {
  path: "/corporate-comedian",
  eyebrow: "Corporate Event Comedy",
  title: "Corporate Comedian for Events and Company Gatherings",
  description: "Book Johnny Watson for company events, team gatherings, celebrations, and live corporate comedy in New Jersey.",
  intro: "Johnny brings relatable live stand-up comedy to company gatherings, celebrations, and organized events.",
  highlights: [
    "Clear pre-event communication about the audience, venue, schedule, and event format.",
    "Performance clips available before booking so organizers can review Johnny's style.",
    "A straightforward inquiry process for planners, companies, and event organizers.",
    "New Jersey-based availability for suitable company events.",
  ],
  bestFor: ["Company celebrations", "Team gatherings", "Awards dinners", "Holiday events", "Company gatherings"],
  localNote: "Johnny is based in New Jersey and can consider company-event bookings throughout the region based on date, location, and event details.",
  planningTitle: "Share the schedule, audience, and venue details",
  planningCopy: [
    "Company events often run on a defined schedule. Sharing the event date, venue, approximate audience size, event format, and desired performance window makes the booking conversation more useful from the start.",
    "You can review Johnny's performance clips before inquiring, then use the booking form to describe the event. Availability and fit are reviewed from the information you provide.",
  ],
  faqs: [
    { question: "What company event details should I send?", answer: "Send the date, venue or city, approximate audience size, event schedule, type of gathering, and where you would like the comedy performance to fit into the program." },
    { question: "Can we watch performance clips before booking?", answer: "Yes. The website includes performance clips so organizers can review Johnny's comedy style before starting a booking inquiry." },
    { question: "What kinds of company events can I inquire about?", answer: "Suitable inquiries can include company celebrations, team gatherings, awards dinners, holiday events, and other organized gatherings." },
    { question: "Does the inquiry form confirm the date?", answer: "No. The form starts the booking conversation. The requested date, location, schedule, and event details still need to be reviewed." },
  ],
};

const CorporateComedianPage = () => <ServicePage content={content} />;

export default CorporateComedianPage;
