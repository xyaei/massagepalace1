import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/massage-palace-interior.png"
          alt="Massage Palace luxury spa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-[0.06] md:opacity-[0.08] pointer-events-none select-none">
          <img
            src="/massage-palace-logo.png"
            alt="Massage Palace emblem"
            className="w-64 h-64 object-contain"
          />
        </div>
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
          className="font-accent text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto italic leading-relaxed space-y-1"
        >
          <span className="block">
            Where tension dissolves and the body remembers what it feels like to be truly at rest.
          </span>
          <span className="block">
            Experience the art of relaxation in our 5,000+ sq ft luxury spa.
          </span>
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
            className="px-10 py-4 bg-secondary text-secondary-foreground font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-gold-light hover:text-background transition-all duration-300 shadow-gold"
          >
            Reserve Your Session
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-secondary text-secondary font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
