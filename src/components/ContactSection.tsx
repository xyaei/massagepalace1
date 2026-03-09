import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Music2, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-lg text-secondary tracking-[0.3em] uppercase mb-2">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Visit Massage Palace
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">2111 Summer Street, 2nd Floor</p>
                <p className="text-muted-foreground">Stamford, CT 06905</p>
                <p className="text-muted-foreground text-sm mt-1 italic">Ridgeway Center — Free Parking Available</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:2035246553" className="text-secondary hover:text-gold-light transition-colors text-lg">
                  (203) 524-6553
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Monday – Sunday: 10:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Socials</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:massagepalacect@gmail.com"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-border transition-colors"
                    aria-label="Email Massage Palace"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/massage_palacect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-border transition-colors"
                    aria-label="Massage Palace on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/stamford.palace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-border transition-colors"
                    aria-label="Massage Palace on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@massagepalacect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-border transition-colors"
                    aria-label="Massage Palace on TikTok"
                  >
                    <Music2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-sm overflow-hidden border border-border h-[400px]"
          >
            <iframe
              title="Massage Palace Location"
              src="https://www.google.com/maps?q=Massage+Palace,+2111+Summer+St,+Stamford,+CT+06905&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
