import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-bold mt-3">
              Let's Work Together
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mt-4">
              Have a project in mind? Reach out and let's create something amazing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Chat directly for quick quotes</p>
                </div>
              </a>

              <a
                href="mailto:hello@designstudio.com"
                className="flex items-center gap-5 p-6 rounded-2xl glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@designstudio.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Instagram</h3>
                  <p className="text-sm text-muted-foreground">Follow for latest work</p>
                </div>
              </a>
            </motion.div>

            {/* Contact form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="John Doe"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="john@example.com"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow-red))] active:scale-[0.98]"
              >
                Send Message <Send size={14} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
