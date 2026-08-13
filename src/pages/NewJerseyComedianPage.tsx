import ServicePage from "./ServicePage";

const content = {
  path: "/new-jersey-comedian",
  eyebrow: "New Jersey Comedian",
  title: "Stand-Up Comedian for Hire in New Jersey",
  description: "Book New Jersey stand-up comedian Johnny Watson for corporate events, private parties, comedy clubs, fundraisers, and special appearances.",
  intro: "Johnny Watson brings relatable stand-up comedy, real-life storytelling, and live performance experience to audiences across New Jersey and beyond.",
  highlights: [
    "A live stand-up performance tailored to the type of event and audience.",
    "A direct booking path with date, location, audience size, and event details collected up front.",
    "Performance clips are available so organizers can see Johnny's style before booking.",
    "New Jersey-based booking support for venues, companies, private hosts, and nonprofit events.",
  ],
  bestFor: ["Corporate events", "Private parties", "Comedy clubs", "Fundraisers and galas", "Special appearances"],
  localNote: "Johnny is based in Bloomingdale, New Jersey, making this the central booking page for New Jersey inquiries.",
};

const NewJerseyComedianPage = () => <ServicePage content={content} />;

export default NewJerseyComedianPage;
