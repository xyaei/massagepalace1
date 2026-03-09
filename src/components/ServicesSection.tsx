import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import bodyMassageImg from "@/assets/body-massage.jpg";
import footMassageImg from "@/assets/foot-massage.jpg";
import waterHeadImg from "@/assets/water-head-therapy.jpg";
import headTherapyImg from "@/assets/head-therapy.jpg";
import facialImg from "@/assets/facial.jpg";
import seaMudImg from "@/assets/sea-mud-scrub.jpg";
import chairMassageImg from "@/assets/chair-massage.jpg";

const services = [
  {
    title: "Body Massage",
    image: bodyMassageImg,
    description: "A full-body therapeutic experience combining deep tissue techniques with heated stones. Our skilled therapists target tension and knots throughout your entire body.",
    includes: "Deep tissue massage, hot stone therapy, essential oil application",
    benefits: "Relieves chronic pain, reduces muscle tension, improves circulation, promotes deep relaxation, and enhances flexibility.",
    durations: "30 / 60 / 90 / 120 min",
  },
  {
    title: "Foot Massage",
    image: footMassageImg,
    description: "A rejuvenating reflexology treatment focusing on pressure points in the feet that correspond to organs and systems throughout the body.",
    includes: "Warm foot soak, reflexology pressure point therapy, moisturizing treatment",
    benefits: "Improves nerve function, boosts circulation, reduces headaches, promotes better sleep, and relieves plantar fasciitis.",
    durations: "30 / 60 / 90 min",
  },
  {
    title: "Water Head Therapy",
    image: waterHeadImg,
    description: "Our signature treatment featuring the popular water arch hydrotherapy system. Warm water cascades over your scalp combined with a luxurious shampoo, conditioning, and moxibustion therapy.",
    includes: "Water arch hydrotherapy, shampoo & conditioning, moxibustion, scalp therapy",
    benefits: "Alleviates migraines, reduces stress and anxiety, stimulates hair growth, detoxifies the scalp, and deeply relaxes the nervous system.",
    durations: "60 / 90 / 120 min",
  },
  {
    title: "Head Scalp Therapy",
    image: headTherapyImg,
    description: "A dry therapeutic head and scalp massage designed to melt away tension. No water involved — just expert hands working through pressure points across the head, temples, and neck.",
    includes: "Dry scalp massage, pressure point therapy, temple and neck release",
    benefits: "Reduces tension headaches, relieves stress, improves concentration, promotes hair health, and induces deep calm.",
    durations: "60 / 90 / 120 min",
  },
  {
    title: "Facial Cleansing & Massage",
    image: facialImg,
    description: "A thorough deep-cleanse facial that purifies and revitalizes your skin. Our aestheticians use professional-grade products to extract impurities and restore your natural glow.",
    includes: "Deep cleansing, steam treatment, extraction, hydrating mask, facial massage",
    benefits: "Clears clogged pores, improves skin texture, reduces fine lines, boosts collagen production, and enhances skin radiance.",
    durations: "30 / 60 min",
  },
  {
    title: "Sea Mud Scrub",
    image: seaMudImg,
    description: "An invigorating full-body exfoliation using mineral-rich sea mud. Our therapists apply the scrub thoroughly and help wipe it off after the session for a complete experience.",
    includes: "Full-body sea mud application, exfoliation, scrub removal, moisturizing finish",
    benefits: "Removes dead skin cells, detoxifies the body, improves skin elasticity, reduces cellulite appearance, and leaves skin silky smooth.",
    durations: "30 / 60 min",
  },
  {
    title: "Chair Massage",
    image: chairMassageImg,
    description: "A quick yet effective seated massage perfect for targeting the back, shoulders, neck, and arms. Ideal for a rejuvenating break during a busy day.",
    includes: "Upper body massage, shoulder and neck focus, pressure point release",
    benefits: "Instant stress relief, reduces muscle stiffness, boosts energy, improves posture, and enhances mental clarity.",
    durations: "10 / 20 / 30 min",
  },
];

const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const currentService = services[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-lg text-secondary tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Our Services
          </h2>
          <div className="gold-divider w-24 mx-auto mb-3" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-accent text-lg italic">
            Essential oil upgrades are available — Lavender, Arnica, Ginger & more (+$12).
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-secondary/40 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-accent text-xs uppercase tracking-[0.2em] text-secondary">
                      {currentService.durations}
                    </p>
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div className="mb-4 lg:mb-6">
                    <p className="font-accent text-xs uppercase tracking-[0.3em] text-secondary mb-2">
                      {activeIndex + 1} / {services.length}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold mb-3 text-left">
                      {currentService.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      {currentService.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1">Includes</p>
                      <p className="text-muted-foreground text-sm md:text-base">{currentService.includes}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1">Benefits</p>
                      <p className="text-muted-foreground text-sm md:text-base">{currentService.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2 border border-secondary text-secondary text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-secondary text-secondary-foreground text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-gold-light hover:text-background transition-colors"
              >
                Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-secondary" : "w-2 bg-border hover:bg-secondary/60"
                  }`}
                  aria-label={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
