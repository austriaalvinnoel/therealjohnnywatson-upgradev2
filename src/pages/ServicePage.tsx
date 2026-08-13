import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export type ServicePageContent = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  bestFor: string[];
  localNote: string;
};

const ServicePage = ({ content }: { content: ServicePageContent }) => {
  useEffect(() => {
    document.title = `${content.title} | Johnny Watson`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", content.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://therealjohnnywatson.com${content.path}`);
    window.scrollTo(0, 0);
  }, [content]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between gap-6">
          <Link to="/" className="text-2xl font-display font-bold text-primary" aria-label="Johnny Watson home">JW</Link>
          <div className="flex items-center gap-5">
            <Link to="/" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} aria-hidden="true" /> Home
            </Link>
            <a href="/#booking" className="btn-gold rounded-sm text-sm">Book Johnny</a>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-28 border-b border-border/60">
          <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] font-medium mb-4">{content.eyebrow}</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">{content.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">{content.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/#booking" className="btn-gold rounded-sm inline-flex items-center justify-center gap-2">
                  <Calendar size={18} aria-hidden="true" /> Check Availability
                </a>
                <a href="/#videos" className="btn-outline-gold rounded-sm inline-flex items-center justify-center">Watch Johnny Perform</a>
              </div>
            </div>

            <aside className="card-theatrical p-7 md:p-8">
              <div className="flex items-start gap-3 mb-5">
                <MapPin className="text-primary mt-1" size={22} aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-bold">New Jersey based</p>
                  <p className="text-muted-foreground mt-1">Bloomingdale, New Jersey</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{content.localNote}</p>
            </aside>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary uppercase tracking-[0.25em] font-medium mb-3">What you can expect</p>
              <h2 className="font-display text-4xl font-bold mb-7">A booking experience built around your event</h2>
              <div className="space-y-4">
                {content.highlights.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} aria-hidden="true" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-theatrical p-7 md:p-8">
              <p className="text-primary uppercase tracking-[0.25em] font-medium mb-3">Best for</p>
              <h2 className="font-display text-3xl font-bold mb-6">Events that need real live comedy</h2>
              <ul className="space-y-3 text-muted-foreground">
                {content.bestFor.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <a href="/#booking" className="btn-gold rounded-sm inline-block mt-8">Send a Booking Inquiry</a>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/60">
          <div className="container mx-auto px-6">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-5">Explore booking options</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Related booking pages">
              <Link className="text-muted-foreground hover:text-primary" to="/new-jersey-comedian">New Jersey Comedian</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/corporate-comedian">Corporate Events</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/private-event-comedian">Private Events</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/fundraiser-comedian">Fundraisers & Galas</Link>
            </nav>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
