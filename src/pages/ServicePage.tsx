import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, FileText, MapPin, PlayCircle } from "lucide-react";
import Footer from "@/components/Footer";

const PRESS_KIT_URL = "https://www.powerpresskits.com/get/johnnywatson";

export type ServicePageContent = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  bestFor: string[];
  localNote: string;
  planningTitle: string;
  planningCopy: string[];
  faqs: { question: string; answer: string }[];
};

const ServicePage = ({ content }: { content: ServicePageContent }) => {
  useEffect(() => {
    const fullTitle = `${content.title} | Johnny Watson`;
    const canonicalUrl = `https://therealjohnnywatson.com${content.path}`;

    document.title = fullTitle;

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "content", content.description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", content.description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", content.description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);

    const schemaId = "service-page-schema";
    document.getElementById(schemaId)?.remove();
    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: fullTitle,
          description: content.description,
          isPartOf: { "@id": "https://therealjohnnywatson.com/#website" },
          about: { "@id": "https://therealjohnnywatson.com/#johnny" },
        },
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: content.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    });
    document.head.appendChild(schema);

    window.scrollTo(0, 0);
    return () => document.getElementById(schemaId)?.remove();
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
            <a
              href={PRESS_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText size={16} aria-hidden="true" /> Press Kit
            </a>
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
                <a href="/#videos" className="btn-outline-gold rounded-sm inline-flex items-center justify-center gap-2">
                  <PlayCircle size={18} aria-hidden="true" /> Watch Johnny Perform
                </a>
              </div>
              <a
                href={PRESS_KIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} aria-hidden="true" /> Promoters & media: view Johnny’s official press kit
              </a>
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

        <section className="py-20 md:py-24 border-t border-border/60">
          <div className="container mx-auto px-6 grid lg:grid-cols-[.8fr_1.2fr] gap-12">
            <div>
              <p className="text-primary uppercase tracking-[0.25em] font-medium mb-3">Planning your event</p>
              <h2 className="font-display text-4xl font-bold">{content.planningTitle}</h2>
            </div>
            <div className="space-y-5">
              {content.planningCopy.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/#booking" className="btn-gold rounded-sm">Check Johnny's Availability</a>
                <a href="/#videos" className="btn-outline-gold rounded-sm">Watch Comedy Clips</a>
                <a
                  href={PRESS_KIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold rounded-sm inline-flex items-center gap-2"
                >
                  <FileText size={17} aria-hidden="true" /> View Press Kit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-t border-border/60">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-primary uppercase tracking-[0.25em] font-medium mb-3">Booking FAQ</p>
            <h2 className="font-display text-4xl font-bold mb-10">Questions before you book</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {content.faqs.map((faq) => (
                <article key={faq.question} className="card-theatrical p-6">
                  <h3 className="font-display text-2xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/60">
          <div className="container mx-auto px-6">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-5">Explore booking options</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Related booking pages">
              <Link className="text-muted-foreground hover:text-primary" to="/new-jersey-comedian">New Jersey Comedian</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/corporate-comedian">Corporate Events</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/party-comedian">Party Events</Link>
              <Link className="text-muted-foreground hover:text-primary" to="/fundraiser-comedian">Fundraisers & Galas</Link>
              <a className="text-muted-foreground hover:text-primary" href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer">Official Press Kit</a>
            </nav>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
