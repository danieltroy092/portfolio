import { ButtonLink } from "@components/Button-link";
import myCV from "@assets/cv.pdf";
import { useEffect, useState } from "react";
import { FadeIn } from "react-fade-in-view";

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

  useEffect(() => {
    const controlNav = () => {
      if (window.pageYOffset > 600) {
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
    } else {
      setBurgerClass("burger-bar");
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 max-md:bg-background/75`}
    >
      <nav className="mx-auto px-6 flex justify-between">
        <a href="/" className="outline-none">
          <FadeIn
            as="img"
            direction="down"
            duration={2000}
            src={"logo.webp"}
            className="size-[40px]"
            alt="site logo consisting of letters D, T and O assembled in a shape of a cube"
            fetchPriority="high"
          ></FadeIn>
        </a>

        {/* Desktop Nav */}

        <div
          className={`hidden lg:flex items-center gap-1  ${showToggle ? "lg:hidden" : ""}`}
        >
          <FadeIn
            as="ol"
            direction="down"
            duration={2000}
            className="nav-list flex items-center gap-1"
          >
            {navLinks.map((link, i) => (
              <li
                className={`nav-list-item list-[decimal-leading-zero] list-inside px-3 py-2 text-xs`}
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
          </FadeIn>

          <ButtonLink
            className="font-semibold nav-list-item list-[decimal-leading-zero] list-inside px-3 py-2 text-xs motion-preset-slide-down motion-duration-2000"
            href={myCV}
            size="sm"
            target="_blank"
            direction="down"
          >
            Download CV
          </ButtonLink>
        </div>

        {/* Mobile Menu Button */}

        <FadeIn
          as="button"
          direction="right"
          onClick={updateMenu}
          aria-label="toggle button for menu"
          className={`toggle relative flex p-1 text-foreground cursor-pointer w-8 h-8 z-50 block ${showToggle ? "" : "lg:hidden"} focus-visible:bg-highlight`}
        >
          <span
            className={`toggle-icon block relative w-[32px] h-[2px]  mb-2 ${burger_class}`}
          ></span>
        </FadeIn>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="toggle-menu bg-background border border-primary/40 glow-border">
          <div className="container p-6">
            <FadeIn
              as="ul"
              direction="right"
              className="toggle-menu-list flex flex-col gap-8"
            >
              {navLinks.map((link, idx) => (
                <li className="toggle-list-item" key={idx}>
                  <a
                    href={link.href}
                    className="text-lg  py-2 font-mono text-sm hover:text-highlight focus-visible:bg-highlight focus-visible:text-background outline-none"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setBurgerClass("burger-bar");
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </FadeIn>

            <ButtonLink
              direction="right"
              className="block mt-10 motion-preset-slide-left motion-duration-1000"
              href={myCV}
              size="sm"
              target="_blank"
            >
              Download CV
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
};
