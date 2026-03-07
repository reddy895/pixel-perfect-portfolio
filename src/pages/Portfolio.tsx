import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignCard from "@/components/DesignCard";
import { portfolioWorks, categories } from "@/data/portfolio";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioWorks
      : portfolioWorks.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-xs font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-bold mt-3">
              My Work
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mt-4">
              A curated collection of design projects across various categories.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-red))]"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((work, i) => (
                <DesignCard key={work.id} work={work} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No designs in this category yet.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
