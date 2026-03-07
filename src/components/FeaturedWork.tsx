import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioWorks } from "@/data/portfolio";

const FeaturedWork = () => {
  const featured = portfolioWorks.filter((w) => w.featured).slice(0, 4);

  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-primary text-xs font-medium tracking-widest uppercase">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mt-3">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View All <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={`/portfolio/${work.id}`} className="group block">
                <div className="glass-card-hover rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        View Project <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium tracking-wider uppercase">
                      {work.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold mt-2">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium"
          >
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
