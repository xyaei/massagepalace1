const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold">Massage Palace</h3>
            <p className="text-muted-foreground text-sm mt-1">Stamford's Premier Massage & Wellness Spa</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              2111 Summer Street, 2nd Floor, Stamford CT 06905
            </p>
            <a href="tel:2035246553" className="text-secondary text-sm hover:text-gold-light transition-colors">
              (203) 524-6553
            </a>
          </div>
        </div>

        <div className="gold-divider w-full my-8" />

        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Massage Palace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
