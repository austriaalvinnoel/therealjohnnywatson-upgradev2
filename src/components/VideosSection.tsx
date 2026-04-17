import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Dynamic, Relatable, Very Funny",
    description:
      "Johnny’s charisma, crowd work, and dependable delivery make him a comedian who can perform almost anywhere and connect with groups large and small.",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  },
  {
    title: "A Nice Guy Who Can Perform Anywhere",
    description:
      "A strong clip for showing booking agents and event organizers the kind of energy Johnny brings to the room.",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  },
  {
    title: "From Hard-Knock Life to Big Laughs",
    description:
      "Comedy shaped by real life, sharp timing, and self-deprecating honesty that audiences remember.",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">
            Watch Johnny Live
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            See the act before you book
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The fastest way to understand Johnny’s style is to watch him perform.
            These clips help visitors, venues, and event organizers see the energy
            he brings to the room.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-secondary/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                  Clip {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{video.title}</h3>
                <p className="text-sm text-muted-foreground leading-7 mb-5">
                  {video.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <a
                    href="#booking"
                    className="text-primary font-medium hover:underline"
                  >
                    Book Johnny →
                  </a>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Play size={16} />
                    Booking Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
