import { motion } from "framer-motion";
import { CalendarDays, MapPin, Mic2 } from "lucide-react";

const upcomingShows = [
  { date: "Aug 21–22, 2026", venue: "Give A Hoot Comedy Club", location: "Gaithersburg, MD", type: "Public Show" },
  { date: "Aug 28–29, 2026", venue: "McGuire's Comedy Club", location: "Bohemia, NY", type: "Public Show" },
  { date: "Sep 19, 2026", venue: "Open Door Arts", location: "Bridgewater, NJ", type: "Public Show" },
  { date: "Sep 29–Oct 3, 2026", venue: "Dry Bar Comedy Special", location: "Provo, UT", type: "Comedy Special" },
  { date: "Oct 9–10, 2026", venue: "Dickens Parlour Theatre", location: "Ocean View, DE", type: "Public Show" },
  { date: "Oct 17, 2026", venue: "Little Ferry Community Center", location: "Little Ferry, NJ", type: "Public Show" },
  { date: "Oct 19, 2026", venue: "Sparta Community Theatre", location: "Sparta, NJ", type: "Public Show" },
  { date: "Oct 29, 2026", venue: "Private Event", location: "Spring City, PA", type: "Private Event" },
  { date: "Nov 11–12, 2026", venue: "Uncle Vinnie's", location: "Point Pleasant Beach, NJ", type: "Public Show" },
  { date: "Nov 20–21, 2026", venue: "Krackpots Comedy Club", location: "Massillon, OH", type: "Public Show" },
  { date: "Dec 18–19, 2026", venue: "Loony's Comedy Club", location: "Edgewater, MD", type: "Public Show" },
  { date: "Dec 31, 2026", venue: "NYE at Uncle Vinnie's", location: "Point Pleasant Beach, NJ", type: "Public Show" },
  { date: "Jan 22–23, 2027", venue: "JP's Comedy Club", location: "Phoenix, AZ", type: "Public Show" },
  { date: "Apr 17, 2027", venue: "Mountainside Elks Club", location: "Mountainside, NJ", type: "Public Show" },
];

const venues = [
  { venue: "New York Comedy Club", location: "New York City" },
  { venue: "Broadway Comedy Club", location: "New York City" },
  { venue: "The Comic Strip Live", location: "New York City" },
];

const ShowsSection = () => {
  return (
    <section id="shows" className="py-24 md:py-32 relative" aria-labelledby="shows-heading">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">Upcoming Shows</p>
          <h2 id="shows-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">Catch Johnny Live</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See where Johnny Watson is performing next. Explore upcoming comedy shows and special appearances, and come experience the laughs live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingShows.map((show, index) => (
            <motion.article key={`${show.date}-${show.venue}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.25) }} className="card-theatrical p-6 rounded-2xl">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-primary mb-4">{show.type}</div>
              <div className="flex items-start gap-3 text-primary font-medium mb-3"><CalendarDays size={18} className="mt-0.5 shrink-0" /><span>{show.date}</span></div>
              <h3 className="font-display text-xl font-semibold mb-3">{show.venue}</h3>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /><span>{show.location}</span></div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          Planning to see Johnny live? Show and ticket information will appear here as details are confirmed.
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <a href="#booking" className="btn-gold rounded-sm">Bring Johnny to Your Event</a>
        </motion.div>

        <div className="mt-24 border-t border-border/50 pt-16">
          <div className="text-center mb-10">
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-3">Featured Venues</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Where Johnny Has Taken the Stage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {venues.map((item) => (
              <article key={item.venue} className="card-theatrical p-6 rounded-2xl">
                <h3 className="font-display text-xl font-semibold mb-4">{item.venue}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3"><Mic2 className="text-primary mt-0.5" size={16} /><span>Live comedy venue</span></div>
                  <div className="flex items-start gap-3"><MapPin className="text-primary mt-0.5" size={16} /><span>{item.location}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
