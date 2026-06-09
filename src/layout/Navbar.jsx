import { ButtonLink } from "@components/Button-link";
import myCV from "@assets/cv.pdf";
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
    <header className="fixed top-0 left-0 right-0 py-5 z-50 bg-background">
      <nav className="mx-auto px-6 flex justify-between">
        <a href="/" className="outline-none">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            src={"logo.webp"}
            className="size-[50px]"
            alt="site logo consisting of letters D, T and O assembled in a shape of a cube"
          ></img>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <ol className="nav-list flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li
                data-aos="fade-down"
                data-aos-delay={i * 100}
                className="nav-list-item list-[decimal-leading-zero] list-inside px-3 py-2 text-xs"
                key={i}
              >
                <a
                  href={link.href}
                  className="link font-mono text-white  hover:text-highlight focus:text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
          <ButtonLink
            data-aos="fade-down"
            data-aos-delay="600"
            className="font-semibold"
            href={myCV}
            size="sm"
            target="_blank"
          >
            Download CV
          </ButtonLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="toggle button for menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="link text-lg active:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href={myCV} size="sm">
              Download CV
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
};
