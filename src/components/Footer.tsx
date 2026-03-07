import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">D</span>
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Design<span className="text-primary">Studio</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:hello@designstudio.com" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="glow-line mt-8 mb-6" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DesignStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
