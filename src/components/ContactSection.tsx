import { motion } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    // let Netlify handle it
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">

      {/* ✅ Hidden Netlify form */}
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input name="name" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message"></textarea>
      </form>

      <div className="container mx-auto px-6">
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="card-theatrical p-8 space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required />

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
