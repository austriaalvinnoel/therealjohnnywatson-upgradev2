import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Mic, Users, Calendar } from "lucide-react";
import aboutData from "../content/about.json";

const iconMap: Record<string, any> = {
  "Years of Comedy": Calendar,
  "Fans Entertained": Users,
  "Shows Performed": Mic,
  "Five-Star Reviews": Star,
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The Story Behind
              <br />
              <span className="text-gradient-gold">The Laughs</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {aboutData.bio_full.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <motion.a
              href="#contact"
              className="btn-gold rounded-sm inline-block mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {aboutData.stats.map((stat, index) => {
              const Icon = iconMap[stat.label] || Star;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card-theatrical p-8 text-center group"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
