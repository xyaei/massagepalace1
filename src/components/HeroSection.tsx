import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/massage-palace-interior.png"
          alt="Massage Palace luxury spa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8 md:mt-12 text-center px-6 py-8 md:py-12 max-w-3xl md:max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.2em] mb-6 text-gradient-gold leading-[1.35] pb-1 uppercase"
        >
          Massage Palace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-accent text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto italic leading-[1.15]"
        >
          Where tension dissolves and the body remembers what it feels like to be truly at rest.
          <br />
          Experience the art of relaxation in our 5,000+ sq ft luxury spa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://go.bychronos.com/l/stamford-06905-massage-palace-804792/a/services?p=g&rwg_token=AFd1xnH_KrVdfU_ZkCTFH5_tZLkrQNfGAPrNQDDRYlYDwsHLXJHzaf0-50sitvzS6NUH4H9kfA4shjCqhNXkg7XkW5k-lY3Nxw%3D%3D"
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

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 1.4, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-32 flex justify-center"
        >
          <ChevronDown className="w-7 h-7 text-gold-light" />
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
