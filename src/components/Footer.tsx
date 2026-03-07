const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="font-display text-2xl font-bold text-gradient-gold tracking-[0.25em] uppercase">
            MASSAGE PALACE
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-body uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#home" className="hover:text-secondary transition-colors">
              ABOUT
            </a>
            <a href="#services" className="hover:text-secondary transition-colors">
              SERVICES
            </a>
            <a href="#pricing" className="hover:text-secondary transition-colors">
              PRICING
            </a>
            <a href="#membership" className="hover:text-secondary transition-colors">
              MEMBERSHIP
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              VISIT
            </a>
            <a
              href="https://www.massage-palace.com/booking-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              BOOK
            </a>
          </nav>

          <p className="text-muted-foreground text-xs">
            © 2026 Massage Palace · 2111 Summer Street, Stamford CT ·{" "}
            <a href="tel:2035246553" className="hover:text-secondary transition-colors">
              (203) 524-6553
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
