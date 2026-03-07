import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Massage Palace luxury spa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-accent text-lg md:text-xl text-secondary tracking-[0.3em] uppercase mb-4">
            Stamford's Premier Wellness Destination
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-gold leading-tight"
        >
          Massage Palace
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="gold-divider w-32 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-accent text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto italic"
        >
          Experience the art of relaxation in our 5,000+ sq ft luxury spa. 
          Professional licensed therapists, serene ambiance, and transformative treatments await.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.massage-palace.com/booking-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-crimson-light transition-all duration-300 shadow-crimson"
          >
            Book Your Experience
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-secondary text-secondary font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-secondary/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
