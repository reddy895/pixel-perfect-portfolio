import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { DesignWork } from "@/data/portfolio";

interface Props {
  work: DesignWork;
  index: number;
}

const DesignCard = ({ work, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <ArrowUpRight size={16} className="text-primary-foreground" />
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-primary font-medium tracking-wider uppercase">
                {work.category}
              </span>
              <span className="text-sm font-semibold text-foreground">
                ${work.price}
              </span>
            </div>
            <h3 className="font-display font-semibold text-base">{work.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DesignCard;
