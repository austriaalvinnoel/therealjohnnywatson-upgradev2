import { motion } from "framer-motion";
import { MapPin, Mic2 } from "lucide-react";

const venues = [
  {
    venue: "New York Comedy Club",
    location: "New York City",
    highlight: "One of Johnny’s recognizable club credentials.",
  },
  {
    venue: "Broadway Comedy Club",
    location: "New York City",
    highlight: "A live comedy venue credit that supports Johnny’s booking experience.",
  },
  {
    venue: "The Comic Strip Live",
    location: "New York City",
    highlight: "A New York comedy room included among Johnny’s featured performance credits.",
  },
];

const ShowsSection = () => {
  return (
    <section id="shows" className="py-24 md:py-32 relative" aria-labelledby="venues-heading">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">
            Featured Venues
          </p>
          <h2 id="venues-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comedy club performance credits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of comedy venues associated with Johnny’s live performance experience.
            Looking for an upcoming date or planning your own event? Send a booking inquiry below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {venues.map((item, index) => (
            <motion.article
              key={item.venue}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="card-theatrical p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                Performance Credit
              </div>

              <h3 className="font-display text-2xl font-semibold mb-5">{item.venue}</h3>

              <div className="space-y-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-start gap-3">
                  <Mic2 className="text-primary mt-0.5" size={16} />
                  <span>Live comedy venue</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-0.5" size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-sm leading-7 text-muted-foreground">{item.highlight}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="#booking" className="btn-gold rounded-sm">
            Book Johnny for Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowsSection;
