import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioWorks } from "@/data/portfolio";

const DesignDetail = () => {
  const { id } = useParams();
  const work = portfolioWorks.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Design not found</h1>
          <Link to="/portfolio" className="text-primary hover:underline text-sm">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden glass-card"
            >
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="text-primary text-xs font-medium tracking-widest uppercase">
                {work.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold mt-3">
                {work.title}
              </h1>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                {work.description}
              </p>

              <div className="mt-8 p-6 rounded-2xl glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">Price</span>
                    <p className="text-3xl font-display font-bold text-primary">
                      ${work.price}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Hi! I'm interested in "${work.title}" ($${work.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow-red))] active:scale-95"
                  >
                    <ShoppingCart size={16} /> Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DesignDetail;
