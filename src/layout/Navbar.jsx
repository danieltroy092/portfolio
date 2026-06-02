import { Button } from "@components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex justify-between">
        <a
          href="#"
          className="text-xl font-mono tracking-tight hover:text-primary"
        >
          {`<Troy />`}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 text-xs">
          <ol className="nav-list glass rounded-full flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li
                className="nav-list-item list-[decimal-leading-zero] list-inside px-3 py-2 text-md"
                key={i}
              >
                <a
                  href={link.href}
                  className="font-mono text-muted-foreground hover:text-primary rounded-full hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ol>

          {/* CV Button */}
          <div className="hidden lg:block">
            <Button size="sm">Download CV</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button>Download CV</Button>
          </div>
        </div>
      )}
    </header>
  );
};
