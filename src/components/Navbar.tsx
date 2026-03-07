import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold text-gradient-gold">
          Massage Palace
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2035246553"
            className="flex items-center gap-2 text-sm text-secondary"
          >
            <Phone className="w-4 h-4" />
            (203) 524-6553
          </a>
          <a
            href="https://www.massage-palace.com/booking-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover:bg-crimson-light transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:2035246553"
                className="flex items-center gap-2 text-sm text-secondary"
              >
                <Phone className="w-4 h-4" />
                (203) 524-6553
              </a>
              <a
                href="https://www.massage-palace.com/booking-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
