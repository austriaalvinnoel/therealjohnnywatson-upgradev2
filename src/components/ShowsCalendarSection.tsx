import { CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const calendarUrl =
  "https://calendar.google.com/calendar/embed?src=thewatsonshow%40gmail.com&ctz=America%2FNew_York";

const ShowsCalendarSection = () => {
  return (
    <section id="calendar" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_60%_20%_/_0.22),transparent_60%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Live show schedule
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Catch Johnny <span className="text-gradient-gold">Live</span>
          </h2>
          <p className="text-muted-foreground">
            See upcoming public shows and appearances. Schedule details are updated
            directly by Johnny.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        >
          <iframe
            title="Johnny Watson live show schedule"
            src={calendarUrl}
            className="h-[620px] w-full border-0 sm:h-[720px]"
            loading="lazy"
          />
        </motion.div>

        <div className="mt-6 text-center">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold gap-2"
          >
            View full calendar
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowsCalendarSection;
