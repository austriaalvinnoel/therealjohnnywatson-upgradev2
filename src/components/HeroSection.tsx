import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-comedian.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Johnny Watson performing on stage"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-medium tracking-[0.3em] uppercase mb-4"
          >
            Comedian • Actor • Entertainer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]"
          >
            <span className="text-foreground">Johnny</span>
            <br />
            <span className="text-gradient-gold">Watson</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Dynamic, relatable, professional, and very, very funny. Live shows,
            real stories, and unforgettable laughs for comedy clubs, private
            parties, and corporate audiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#videos"
              className="btn-gold rounded-sm flex items-center justify-center gap-2"
            >
              <Play size={18} />
              Watch Clips
            </a>

            <a
              href="#booking"
              className="btn-outline-gold rounded-sm flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Book Johnny
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 border-l-2 border-primary/50 pl-6"
          >
            <p className="text-muted-foreground italic text-lg">
              "Johnny Watson always makes me laugh."
            </p>
            <p className="text-primary mt-2 font-medium">
              — Adam Ferrara, FX&apos;s "Rescue Me"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
