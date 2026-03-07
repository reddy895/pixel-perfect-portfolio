import { motion } from "framer-motion";
import { Palette, Layout, Layers, Zap, PenTool, Monitor } from "lucide-react";

const services = [
  { icon: Palette, title: "Logo Design", desc: "Memorable brand marks that define your identity" },
  { icon: Layout, title: "Poster Design", desc: "Eye-catching posters for events and promotions" },
  { icon: Monitor, title: "Social Media", desc: "Scroll-stopping content for all platforms" },
  { icon: Zap, title: "Thumbnails", desc: "Click-worthy YouTube thumbnails" },
  { icon: Layers, title: "Banner Design", desc: "Professional web and print banners" },
  { icon: PenTool, title: "Full Branding", desc: "Complete brand identity packages" },
];

const ServicesSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-medium tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-3">
            Design Services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4">
            From concept to completion, I deliver designs that captivate and convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover rounded-2xl p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg">{service.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
