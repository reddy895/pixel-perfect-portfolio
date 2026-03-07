import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pricingPackages } from "@/data/portfolio";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-medium tracking-widest uppercase">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-bold mt-3">
              Service Packages
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mt-4">
              Transparent pricing for every design need. Custom quotes available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "glass-card border-primary/40 shadow-[0_0_40px_hsl(var(--glow-red))]"
                    : "glass-card-hover"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase">
                    Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-xl">{pkg.name}</h3>
                <p className="text-2xl font-display font-bold text-primary mt-3">
                  {pkg.priceRange}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hi! I'm interested in the ${pkg.name} package (${pkg.priceRange})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--glow-red))]"
                      : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  Order Now <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
