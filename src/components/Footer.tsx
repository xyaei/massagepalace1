import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link to="/" className="font-display text-2xl font-bold text-gradient-gold tracking-[0.25em] uppercase">
            MASSAGE PALACE
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-body uppercase tracking-[0.25em] text-muted-foreground">
            <Link to="/" className="hover:text-secondary transition-colors">
              ABOUT
            </Link>
            <Link to="/#services" className="hover:text-secondary transition-colors">
              SERVICES
            </Link>
            <Link to="/pricing" className="hover:text-secondary transition-colors">
              PRICING
            </Link>
            <Link to="/membership" className="hover:text-secondary transition-colors">
              MEMBERSHIP
            </Link>
            <Link to="/#contact" className="hover:text-secondary transition-colors">
              VISIT
            </Link>
            <a
              href="https://go.bychronos.com/l/stamford-06905-massage-palace-804792/a/services?p=g&rwg_token=AFd1xnH_KrVdfU_ZkCTFH5_tZLkrQNfGAPrNQDDRYlYDwsHLXJHzaf0-50sitvzS6NUH4H9kfA4shjCqhNXkg7XkW5k-lY3Nxw%3D%3D"
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
            </a>{" "}
            ·{" "}
            <a href="mailto:massagepalacect@gmail.com" className="hover:text-secondary transition-colors">
              massagepalacect@gmail.com
            </a>
          </p>
          <p className="text-muted-foreground/60 text-[10px] mt-4">
            <Link to="/privacy-policy" className="hover:text-muted-foreground/80 transition-colors">
              Privacy Policy
            </Link>
            {" · "}
            <Link to="/terms" className="hover:text-muted-foreground/80 transition-colors">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
