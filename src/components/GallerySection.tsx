import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
  "/gallery-4.png",
  "/gallery-5.png",
];

const getIndex = (i: number, offset: number) =>
  (i + offset + images.length) % images.length;

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const id = setInterval(goToNext, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-accent text-lg text-secondary tracking-[0.3em] uppercase mb-3">
            Gallery
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
            Inside Our Store
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={goToPrev}
              className="flex-shrink-0 p-2 rounded-sm border border-border hover:border-secondary hover:text-secondary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 flex items-stretch gap-2 md:gap-3 overflow-hidden">
              <div className="flex-[0.8] rounded-sm overflow-hidden border border-border opacity-70 h-72 md:h-80">
                <img
                  src={images[getIndex(activeIndex, -1)]}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-[1.4] rounded-sm overflow-hidden border border-border relative h-72 md:h-80">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[activeIndex]}
                    src={images[activeIndex]}
                    alt="Massage Palace gallery"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="flex-[0.8] rounded-sm overflow-hidden border border-border opacity-70 h-72 md:h-80">
                <img
                  src={images[getIndex(activeIndex, 1)]}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="flex-shrink-0 p-2 rounded-sm border border-border hover:border-secondary hover:text-secondary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIndex ? "w-6 bg-secondary" : "w-2 bg-border hover:bg-secondary/60"
                }`}
                aria-label={`Gallery image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

