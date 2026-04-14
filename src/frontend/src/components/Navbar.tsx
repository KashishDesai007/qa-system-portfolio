import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-glow border-b neon-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo — button scrolls to top */}
        <button
          type="button"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
          aria-label="Aditi Maheshwari - Home"
          data-ocid="nav.logo_link"
        >
          <div className="w-8 h-8 rounded border neon-border flex items-center justify-center animate-[pulse-glow_2s_ease-in-out_infinite]">
            <span className="font-mono text-xs neon-text font-bold">QA</span>
          </div>
          <span className="font-display font-bold text-foreground tracking-wider">
            ADITI<span className="neon-text">.</span>MAHESHWARI
          </span>
        </button>

        {/* Desktop links — real anchors for ATS/SEO crawlability */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`px-4 py-2 font-display text-sm font-medium tracking-widest uppercase transition-smooth relative group inline-block
                  ${active === link.href ? "neon-text" : "text-muted-foreground hover:text-foreground"}`}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${active === link.href ? "scale-x-100" : ""}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="/resume.pdf"
            download
            className="glass neon-border px-5 py-2 font-mono text-xs neon-text tracking-widest uppercase glow-accent-hover transition-smooth"
            data-ocid="nav.download_resume_button"
          >
            [ DOWNLOAD RESUME ]
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-ocid="nav.hamburger_toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — real anchors for ATS/SEO crawlability */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t neon-border px-4 py-4 space-y-2 animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
              className="block py-3 px-4 font-display text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-accent/5 rounded transition-smooth"
              data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block mt-4 glass neon-border py-3 px-4 font-mono text-xs neon-text tracking-widest uppercase text-center"
            data-ocid="nav.mobile_download_button"
          >
            [ DOWNLOAD RESUME ]
          </a>
        </div>
      )}
    </header>
  );
}
