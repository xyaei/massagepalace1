import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Users, Sparkles, Gift } from "lucide-react";

const perks = [
  { icon: Sparkles, title: "50–60% Off", desc: "On all services for yourself" },
  { icon: Users, title: "30–45% Off", desc: "For your friends & family" },
  { icon: Gift, title: "Gift Certificates", desc: "Available for all occasions" },
  { icon: Crown, title: "Other Exclusive Benefits", desc: "Additional perks and seasonal offers." },
];

const MembershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="font-accent text-lg text-secondary tracking-[0.3em] uppercase mb-3">
              Exclusive Access
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-normal text-gradient-gold uppercase mb-6">
              Membership Program
            </h2>
          </div>

          {/* Card */}
          <div className="bg-card border border-secondary/30 rounded-sm p-8 md:p-12 shadow-gold relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-secondary/40" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-secondary/40" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/40" />

            <div className="text-center mb-10">
              <Crown className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="font-display text-4xl font-bold text-gradient-gold">$165</span>
                <span className="text-muted-foreground font-accent text-xl">/year</span>
              </div>
              <p className="text-muted-foreground font-accent text-lg italic mt-5">
                Unlock premium savings on every visit
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4 p-4 rounded-sm bg-muted/50">
                  <perk.icon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">{perk.title}</h4>
                    <p className="text-muted-foreground text-sm">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:2035246553"
                className="inline-block px-12 py-4 bg-secondary text-secondary-foreground font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-gold-light hover:text-background transition-all duration-300 shadow-gold"
              >
                Become a Member — Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
