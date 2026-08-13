import ServicePage from "./ServicePage";

const content = {
  path: "/new-jersey-comedian",
  eyebrow: "New Jersey Comedian",
  title: "Stand-Up Comedian for Hire in New Jersey",
  description: "Book New Jersey stand-up comedian Johnny Watson for corporate events, private parties, comedy clubs, fundraisers, and special appearances.",
  intro: "Johnny Watson brings relatable stand-up comedy, real-life storytelling, and live performance experience to audiences across New Jersey and beyond.",
  highlights: [
    "A live stand-up performance matched to the type of event and audience.",
    "A direct booking path with date, location, audience size, and event details collected up front.",
    "Performance clips are available so organizers can see Johnny's style before booking.",
    "New Jersey-based booking support for venues, companies, private hosts, and nonprofit events.",
  ],
  bestFor: ["Corporate events", "Private parties", "Comedy clubs", "Fundraisers and galas", "Special appearances"],
  localNote: "Johnny is based in Bloomingdale, New Jersey, making this the central booking page for New Jersey inquiries.",
  planningTitle: "Start with the audience, venue, and date",
  planningCopy: [
    "A strong comedy booking starts with a clear picture of the event. Share the date, New Jersey location, type of audience, approximate guest count, and where comedy fits into the schedule so the inquiry can be evaluated efficiently.",
    "Not sure which booking option fits? Use this page as the starting point. Corporate gatherings, private celebrations, fundraisers, galas, comedy clubs, and special appearances each have dedicated booking paths below.",
  ],
  faqs: [
    { question: "What details should I include in a booking inquiry?", answer: "Include the event date, location, event type, approximate audience size, schedule, and any important venue or program details. That gives Johnny the context needed to review availability." },
    { question: "Can I watch Johnny perform before I inquire?", answer: "Yes. Performance clips are available on the website so organizers can get a feel for Johnny's stand-up style before sending a booking inquiry." },
    { question: "What types of New Jersey events can I inquire about?", answer: "You can inquire about corporate events, private parties, comedy clubs, fundraisers, galas, community events, and other suitable live appearances." },
    { question: "Does submitting the form confirm the booking?", answer: "No. The form starts the booking conversation. Availability and event details still need to be reviewed before a performance is confirmed." },
  ],
};

const NewJerseyComedianPage = () => <ServicePage content={content} />;

export default NewJerseyComedianPage;
