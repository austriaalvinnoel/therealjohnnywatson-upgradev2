import { motion } from "framer-motion";
import { Disc3, Shirt, Sparkles, Sticker } from "lucide-react";

const merchItems = [
  { name: "T-Shirts", icon: Shirt, note: "Official Johnny Watson shirts" },
  { name: "Comedy CDs", icon: Disc3, note: "More laughs to take home" },
  { name: "Stickers", icon: Sticker, note: "Johnny Watson fan gear" },
];

const MerchSection = () => {
  return (
    <section id="merch" className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="merch-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-5">
            <Sparkles size={15} /> Coming Soon
          </div>
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4">Johnny's Merch</p>
          <h2 id="merch-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">Take the Laughs Home</h2>
          <p className="text-muted-foreground leading-relaxed">Official Johnny Watson merchandise is on the way. T-shirts are getting things started, with CDs, stickers and more fan gear planned for the collection.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {merchItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card-theatrical rounded-2xl p-7 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5"><Icon className="text-primary" size={22} /></div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.note}</p>
                <span className="text-[11px] uppercase tracking-[0.18em] text-primary">Coming Soon</span>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">Product photos, pricing and ordering details will be added when the collection is ready.</p>
      </div>
    </section>
  );
};

export default MerchSection;
