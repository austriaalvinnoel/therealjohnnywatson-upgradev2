import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown, ChevronUp, MapPin, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

type ShowEvent = { id: string; title: string; location?: string; description?: string; url?: string; start: string; end?: string; allDay?: boolean; };

const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });
const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "America/New_York" });
const dayFormatter = new Intl.DateTimeFormat("en-US", { day: "2-digit", timeZone: "America/New_York" });
const weekdayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "America/New_York" });
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
const getDateParts = (event: ShowEvent) => {
  const value = event.allDay ? new Date(`${event.start.slice(0, 10)}T12:00:00-04:00`) : new Date(event.start);
  return { month: monthFormatter.format(value), day: dayFormatter.format(value), weekday: weekdayFormatter.format(value) };
};

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
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto max-w-3xl">
          {loading ? <div className="card-theatrical flex items-center justify-center gap-3 p-12 text-muted-foreground"><RefreshCw className="h-5 w-5 animate-spin" /> Loading show dates…</div> : events.length ? (
            <>
              <div className="relative space-y-4 before:absolute before:bottom-6 before:left-[31px] before:top-6 before:w-px before:bg-primary/25 sm:before:left-[39px]">
                <AnimatePresence initial={false}>
                  {visibleEvents.map((event, index) => {
                    const date = getDateParts(event);
                    return (
                      <motion.article key={event.id} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28, delay: Math.min(index * 0.045, 0.3) }} className="group relative grid grid-cols-[64px_1fr] gap-4 sm:grid-cols-[80px_1fr] sm:gap-5">
                        <div className="relative z-10 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-primary/40 bg-background text-primary shadow-[0_0_0_6px_hsl(var(--background))] transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:h-20 sm:w-20">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">{date.month}</span>
                          <span className="text-2xl font-black leading-none">{date.day}</span>
                          <span className="mt-1 text-[10px] font-semibold uppercase">{date.weekday}</span>
                        </div>
                        <div className="card-theatrical min-w-0 border-l-2 border-l-primary/50 p-5 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-[0_14px_40px_hsl(38_80%_50%_/_0.12)]">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                              {!event.allDay && <p className="mb-2 text-sm text-primary/90">{formatTime(event.start)}{event.end ? ` – ${formatTime(event.end)}` : ""} <span className="text-muted-foreground">Eastern Time</span></p>}
                              {event.location && <p className="mb-2 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{event.location}</p>}
                              {event.description && <p className="whitespace-pre-line line-clamp-2 text-sm text-muted-foreground">{event.description}</p>}
                            </div>
                            {event.url && <a href={event.url} target="_blank" rel="noopener noreferrer" className="btn-outline-gold shrink-0 whitespace-nowrap px-4 py-2 text-xs">Book / Details</a>}
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
              {events.length > 8 && <motion.button layout type="button" onClick={() => setShowAll((value) => !value)} className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground" aria-expanded={showAll}>
                {showAll ? <>Show less <ChevronUp className="h-4 w-4" /></> : <>Show more <ChevronDown className="h-4 w-4" /></>}
              </motion.button>}
            </>
          ) : <div className="card-theatrical p-12 text-center text-muted-foreground">New show dates are coming soon. Check back for updates.</div>}
        </motion.div>
      </div>
    </section>
  );
};
export default ShowsCalendarSection;
