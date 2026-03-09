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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
            <img
              src="/massage-palace-logo.png"
              alt="Massage Palace logo"
              className="w-16 h-16 object-contain mix-blend-screen opacity-95"
            />
          </div>
          <div className="flex flex-col items-center leading-tight">
            <span className="font-display text-lg md:text-xl font-semibold tracking-[0.25em] text-gradient-gold uppercase">
              Massage Palace
            </span>
            <span className="font-accent text-[0.6rem] tracking-[0.35em] text-crimson-light uppercase">
              Professional Service
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 ml-6 flex-1">
          <div className="flex-1 flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 mr-6">
            <a
              href="tel:2035246553"
              className="flex items-center gap-2 text-base text-secondary"
            >
              <Phone className="w-4 h-4" />
              (203) 524-6553
            </a>
            <a
              href="https://go.bychronos.com/l/stamford-06905-massage-palace-804792/a/services?p=g&rwg_token=AFd1xnH_KrVdfU_ZkCTFH5_tZLkrQNfGAPrNQDDRYlYDwsHLXJHzaf0-50sitvzS6NUH4H9kfA4shjCqhNXkg7XkW5k-lY3Nxw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-gold text-background font-body text-sm uppercase tracking-wider rounded-sm hover:brightness-110 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground border border-border rounded-sm p-2 bg-card/80 hover:border-secondary hover:text-secondary transition-colors"
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
                href="https://go.bychronos.com/l/stamford-06905-massage-palace-804792/a/services?p=g&rwg_token=AFd1xnH_KrVdfU_ZkCTFH5_tZLkrQNfGAPrNQDDRYlYDwsHLXJHzaf0-50sitvzS6NUH4H9kfA4shjCqhNXkg7XkW5k-lY3Nxw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-gold text-background font-body text-sm uppercase tracking-wider rounded-sm text-center"
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
