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
};

const FundraiserComedianPage = () => <ServicePage content={content} />;

export default FundraiserComedianPage;
