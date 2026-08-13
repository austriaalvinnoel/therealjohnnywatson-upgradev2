import { motion } from "framer-motion";
import { Building2, PartyPopper, Mic2, HeartHandshake } from "lucide-react";

const bookingOptions = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Bring professional stand-up comedy to company events, celebrations, and team gatherings.",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "Add a memorable live comedy experience to birthdays, celebrations, and private events.",
  },
  {
    icon: Mic2,
    title: "Comedy Clubs",
    description: "Book Johnny for club dates, showcases, guest spots, and live comedy programming.",
  },
  {
    icon: HeartHandshake,
    title: "Fundraisers & Galas",
    description: "Give guests an entertaining live performance for fundraising events and special occasions.",
  },
];

const BookingOptionsSection = () => (
  <section id="events" className="py-20 md:py-24 border-y border-border/60">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-primary font-medium tracking-[0.3em] uppercase mb-3">Book Johnny</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Stand-up comedy for your event</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Based in Bloomingdale, New Jersey, Johnny is available for comedy clubs, corporate events,
          private parties, fundraisers, and special appearances. Tell us about your event and we’ll
          help determine the right fit.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bookingOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.article
              key={option.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-theatrical p-6"
            >
              <Icon className="w-7 h-7 text-primary mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold mb-3">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{option.description}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <a href="#booking" className="btn-gold rounded-sm inline-block">Check availability</a>
      </div>
    </div>
  </section>
);

export default BookingOptionsSection;
