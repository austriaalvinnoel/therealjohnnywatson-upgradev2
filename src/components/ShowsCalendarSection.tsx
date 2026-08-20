import { CalendarDays, ChevronDown, ChevronUp, MapPin, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ShowEvent = { id: string; title: string; location?: string; description?: string; url?: string; start: string; end?: string; allDay?: boolean; };

const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });
const formatTimedDate = (value: string) => dateFormatter.format(new Date(value));
const formatAllDayDate = (value: string) => dateFormatter.format(new Date(`${value.slice(0, 10)}T12:00:00-04:00`));
const formatDateRange = (start: string, end?: string) => {
  if (!end) return formatAllDayDate(start);
  const endDate = new Date(end);
  endDate.setUTCDate(endDate.getUTCDate() - 1);
  const startText = formatAllDayDate(start);
  const endText = formatAllDayDate(endDate.toISOString());
  return startText === endText ? startText : `${startText} – ${endText}`;
};
const formatTime = (value: string) => new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" }).format(new Date(value));

const ShowsCalendarSection = () => {
  const [events, setEvents] = useState<ShowEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? events : events.slice(0, 8);

  useEffect(() => {
    fetch("/api/calendar").then((response) => (response.ok ? response.json() : Promise.reject())).then((data) => setEvents(data.events ?? [])).catch(() => setEvents([])).finally(() => setLoading(false));
  }, []);

  return (
    <section id="calendar" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_60%_20%_/_0.22),transparent_60%)]" />
      <div className="container relative mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary"><CalendarDays className="h-4 w-4" aria-hidden="true" /> Live show schedule</div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Catch Johnny <span className="text-gradient-gold">Live</span></h2>
          <p className="text-muted-foreground">Upcoming public shows and appearances, updated directly from Johnny's calendar.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto max-w-3xl space-y-4">
          {loading ? <div className="card-theatrical flex items-center justify-center gap-3 p-12 text-muted-foreground"><RefreshCw className="h-5 w-5 animate-spin" /> Loading show dates…</div> : events.length ? visibleEvents.map((event) => (
            <article key={event.id} className="card-theatrical grid gap-4 border-l-4 border-l-primary p-5 sm:grid-cols-[150px_1fr_auto] sm:items-start">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">{event.allDay ? formatDateRange(event.start, event.end) : formatTimedDate(event.start)}</div>
              <div>
                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                {!event.allDay && <p className="mb-2 text-sm text-muted-foreground">{formatTime(event.start)}{event.end ? ` – ${formatTime(event.end)}` : ""} Eastern Time</p>}
                {event.location && <p className="mb-2 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{event.location}</p>}
                {event.description && <p className="whitespace-pre-line line-clamp-3 text-sm text-muted-foreground">{event.description}</p>}
              </div>
              {event.url && <a href={event.url} target="_blank" rel="noopener noreferrer" className="btn-outline-gold whitespace-nowrap px-4 py-2 text-xs">Book / Details</a>}
            </article>
          )) : <div className="card-theatrical p-12 text-center text-muted-foreground">New show dates are coming soon. Check back for updates.</div>}
          {!loading && events.length > 8 && <button type="button" onClick={() => setShowAll((value) => !value)} className="mx-auto flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground" aria-expanded={showAll}>
            {showAll ? <>Show less <ChevronUp className="h-4 w-4" /></> : <>Show more <ChevronDown className="h-4 w-4" /></>}
          </button>}
        </motion.div>
      </div>
    </section>
  );
};
export default ShowsCalendarSection;
