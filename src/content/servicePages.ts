import type { ServicePageContent } from "@/pages/ServicePage";

export const servicePages: Record<string, ServicePageContent> = {
  newJersey: {
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
    localNote: "Johnny is based in Bloomingdale, New Jersey, making this page the central booking hub for New Jersey inquiries instead of creating thin copy-and-paste pages for every city.",
  },
  corporate: {
    path: "/corporate-comedian",
    eyebrow: "Corporate Event Comedy",
    title: "Corporate Comedian for Events and Company Gatherings",
    description: "Book Johnny Watson for corporate events, company celebrations, team gatherings, client entertainment, and professional live comedy in New Jersey.",
    intro: "Give employees, clients, and guests a live comedy experience that feels personal, energetic, and memorable without making the booking process complicated.",
    highlights: [
      "Clear pre-event communication around audience, venue, schedule, and expectations.",
      "Live stand-up comedy suited to company celebrations, team events, and client entertainment.",
      "Performance clips available for planners who need to review the act before confirming.",
      "A straightforward inquiry process for event professionals and company organizers.",
    ],
    bestFor: ["Company celebrations", "Team gatherings", "Client entertainment", "Awards dinners", "Holiday events"],
    localNote: "Johnny is based in New Jersey and is available for corporate bookings in the region, with event details confirmed through the booking inquiry before any commitment is made.",
  },
  privateEvent: {
    path: "/private-event-comedian",
    eyebrow: "Private Event Comedy",
    title: "Comedian for Private Parties and Special Events",
    description: "Hire Johnny Watson for private parties, birthdays, celebrations, special events, and live comedy entertainment in New Jersey.",
    intro: "For hosts who want something more memorable than background entertainment, Johnny brings a real stand-up comedy performance directly to the event.",
    highlights: [
      "Live comedy that gives guests a shared experience and a clear entertainment centerpiece.",
      "Booking details gathered in advance so date, location, audience size, and special requests are understood.",
      "Clips available before booking so hosts can get a feel for Johnny's delivery and energy.",
      "Suitable for a range of private celebrations when the event and audience are a good fit.",
    ],
    bestFor: ["Birthday celebrations", "Private parties", "Anniversaries", "Community gatherings", "Special occasions"],
    localNote: "Based in Bloomingdale, New Jersey, Johnny can consider private-event inquiries throughout the surrounding region based on date, location, and event requirements.",
  },
  fundraiser: {
    path: "/fundraiser-comedian",
    eyebrow: "Fundraisers and Galas",
    title: "Comedian for Fundraisers, Galas, and Charity Events",
    description: "Book comedian Johnny Watson for fundraisers, charity events, galas, nonprofit gatherings, and special-event comedy in New Jersey.",
    intro: "A live comedy performance can give a fundraiser or gala a memorable entertainment moment while helping organizers keep guests engaged during the event.",
    highlights: [
      "A clear entertainment segment that can fit into a broader fundraising or gala program.",
      "Advance communication around timing, audience, event format, and venue logistics.",
      "Performance clips available to help committees and organizers review the act before booking.",
      "A direct inquiry process for nonprofits, committees, venues, and event planners.",
    ],
    bestFor: ["Charity fundraisers", "Nonprofit galas", "Benefit events", "Community organizations", "Special fundraising programs"],
    localNote: "Johnny is New Jersey based and can consider fundraiser and gala inquiries across the region based on availability and the needs of the event.",
  },
};
