import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";
import contactData from "../content/contact.json";

const WEB3FORMS_KEY = "4c4f0343-dd53-4037-93e2-942ee699458e";

const ContactSection = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    audienceSize: "",
    message: "",
  });
  const [website, setWebsite] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      audienceSize: "",
      message: "",
    });
    setWebsite("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    // Invisible honeypot: legitimate visitors never fill this field.
    if (website) {
      setSubmitted(true);
      resetForm();
      return;
    }

    setSubmitting(true);

    const bookingDetails = [
      `Event type: ${formData.eventType}`,
      `Event date: ${formData.eventDate}`,
      `Location: ${formData.eventLocation}`,
      `Estimated audience size: ${formData.audienceSize || "Not provided"}`,
      "",
      "Additional details:",
      formData.message || "None provided",
    ].join("\n");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Booking Inquiry: ${formData.eventType} — ${formData.eventDate}`,
          message: bookingDetails,
          ccemail: "thewatsonshows@gmail.com",
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        resetForm();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 relative" aria-labelledby="booking-heading">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">
            Booking
          </p>

          <h2 id="booking-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">
            Book <span className="text-gradient-gold">Johnny</span> Watson
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Available for comedy clubs, private parties, corporate events, and
            special appearances. Share the event basics below so Johnny’s team
            can quickly review the date, location, audience, and availability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">
                Get In Touch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href={`mailto:${contactData.email}`}>
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a href={`tel:${contactData.phone}`}>
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Based In</p>
                    <p>{contactData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-theatrical p-6">
              <h4 className="text-sm text-primary mb-4">Available For</h4>

              <div className="space-y-3">
                {[
                  { icon: Users, label: "Corporate Events" },
                  { icon: Calendar, label: "Private Parties" },
                  { icon: MapPin, label: "Comedy Clubs" },
                  { icon: Users, label: "Fundraisers & Galas" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon size={14} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center p-10 card-theatrical">
                <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Inquiry Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  We’ll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold rounded-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                ref={ref}
                onSubmit={handleSubmit}
                className="card-theatrical p-8 space-y-5"
              >
                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="booking-website">Website</label>
                  <input
                    id="booking-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="sr-only" htmlFor="booking-name">Your Name</label>
                  <input
                    id="booking-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your Name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                  />

                  <label className="sr-only" htmlFor="booking-email">Email Address</label>
                  <input
                    id="booking-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                  />
                </div>

                <label className="sr-only" htmlFor="booking-event-type">Type of Event</label>
                <select
                  id="booking-event-type"
                  required
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({ ...formData, eventType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                >
                  <option value="">Type of Event</option>
                  <option value="Comedy Club">Comedy Club</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Private Party">Private Party</option>
                  <option value="Podcast / Media">Podcast / Media</option>
                  <option value="Fundraiser / Gala">Fundraiser / Gala</option>
                  <option value="Other">Other</option>
                </select>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-date" className="block text-xs text-muted-foreground mb-2">
                      Event Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-audience" className="block text-xs text-muted-foreground mb-2">
                      Estimated Audience Size
                    </label>
                    <input
                      id="booking-audience"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9, ]{1,20}"
                      maxLength={20}
                      placeholder="e.g. 150"
                      value={formData.audienceSize}
                      onChange={(e) =>
                        setFormData({ ...formData, audienceSize: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <label className="sr-only" htmlFor="booking-location">Event Location</label>
                <input
                  id="booking-location"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Event Location (city, state or venue)"
                  required
                  minLength={2}
                  maxLength={160}
                  value={formData.eventLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, eventLocation: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-sm"
                />

                <label className="sr-only" htmlFor="booking-details">Additional Event Details</label>
                <textarea
                  id="booking-details"
                  placeholder="Tell us anything else that would help: event schedule, audience, venue, performance length, or special requests."
                  rows={5}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none resize-none text-sm"
                />

                <p className="text-xs text-muted-foreground text-center">
                  No commitment required. This form is an availability and booking inquiry.
                </p>

                {error && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or contact Johnny directly by email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold rounded-sm w-full"
                >
                  {submitting ? "Sending..." : "Check Johnny’s Availability"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
