import { motion } from "framer-motion";
import { Youtube, Instagram, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/user/WatsonnWatson", label: "Johnny Watson on YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/johnnywatsoncomedy/", label: "Johnny Watson on Instagram" },
  { icon: Twitter, href: "https://x.com/comedianwatson", label: "Johnny Watson on X" },
  { icon: Facebook, href: "https://www.facebook.com/johnnywatson11", label: "Johnny Watson on Facebook" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="/" className="text-3xl font-display font-bold text-primary">Johnny Watson</a>
            <p className="text-sm text-muted-foreground mt-2">
              New Jersey stand-up comedian available for comedy clubs, private events, corporate shows, and special appearances.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mt-4 text-sm">
              <a href="/new-jersey-comedian" className="text-muted-foreground hover:text-primary transition-colors">New Jersey comedian</a>
              <a href="/corporate-comedian" className="text-muted-foreground hover:text-primary transition-colors">Corporate events</a>
              <a href="/#videos" className="text-muted-foreground hover:text-primary transition-colors">Watch clips</a>
              <a href="/#shows" className="text-muted-foreground hover:text-primary transition-colors">Venues</a>
              <a href="/#booking" className="text-primary font-medium hover:underline">Book Johnny →</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} aria-hidden="true" />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Johnny Watson. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
