import { motion } from "framer-motion";
import { ExternalLink, FileText, Images, Mic2, PlayCircle } from "lucide-react";

const pressKitUrl = "https://www.powerpresskits.com/get/johnnywatson";

const materials = [
  {
    icon: PlayCircle,
    title: "Performance Video",
    description: "Long-form and featured comedy clips for talent buyers and event planners.",
  },
  {
    icon: Mic2,
    title: "Audio",
    description: "Selected audio appearances and comedy material in one professional resource.",
  },
  {
    icon: Images,
    title: "Photos & Media",
    description: "Promotional images and visual assets for event listings, press, and publicity.",
  },
  {
    icon: FileText,
    title: "Bio, Press & Documents",
    description: "Background, press coverage, professional information, and booking materials.",
  },
];

const PressKitSection = () => {
  return (
    <section id="press-kit" className="py-24 md:py-32 relative" aria-labelledby="press-kit-heading">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto card-theatrical rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">
                Media & Talent Buyers
              </p>
              <h2 id="press-kit-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">
                Johnny Watson Press Kit
              </h2>
              <p className="text-muted-foreground leading-8 mb-8">
                Need Johnny’s professional materials before making a booking decision? Open the official
                electronic press kit for performance clips, audio, promotional images, biography, press,
                documents, and booking information.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={pressKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-sm inline-flex items-center justify-center gap-2"
                >
                  Open Official Press Kit
                  <ExternalLink size={18} />
                </a>
                <a href="#booking" className="btn-outline-gold rounded-sm text-center">
                  Check Booking Availability
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {materials.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-xl border border-border bg-background/40 p-5">
                  <Icon className="text-primary mb-4" size={24} />
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressKitSection;
