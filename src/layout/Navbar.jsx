import { ButtonLink } from "@components/Button-link";
import myCV from "@assets/cv.pdf";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");

  useEffect(() => {
    const controlNav = () => {
      if (window.pageYOffset > 100) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
        setIsMobileMenuOpen(false);
        setBurgerClass("burger-bar");
      }
    };

    window.addEventListener("scroll", controlNav);

    return () => window.removeEventListener("scroll", controlNav);
  }, []);

  const updateMenu = () => {
    if (!isMobileMenuOpen) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar");
      setMenuClass("menu hidden");
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-5 z-50 ${isMobileMenuOpen ? "bg-background" : "bg-transparent"}`}
    >
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
        <div
          className={`lg:flex items-center gap-1  ${showToggle ? "lg:hidden" : ""}`}
        >
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
          className={`toggle relative flex p-1 text-foreground cursor-pointer w-8 h-8 block ${showToggle ? "" : "lg:hidden"}`}
          onClick={updateMenu}
          aria-label="toggle button for menu"
        >
          <span
            className={`toggle-icon block relative w-[32px] h-[2px]  mb-2 ${burger_class}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="bg-background animate-fade-in">
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
