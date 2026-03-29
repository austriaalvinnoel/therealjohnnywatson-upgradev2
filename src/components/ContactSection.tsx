return (
  <section id="contact" className="py-24 md:py-32 relative">

    {/* ✅ Hidden Netlify form */}
    <form name="contact" method="POST" data-netlify="true" hidden>
      <input name="name" />
      <input name="email" />
      <input name="subject" />
      <textarea name="message"></textarea>
    </form>

    {/* 👇 your existing content */}
    
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      onSubmit={handleSubmit}
      className="card-theatrical p-8 space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* ALL YOUR INPUTS HERE (unchanged) */}

    </motion.form>

  </section>
);
