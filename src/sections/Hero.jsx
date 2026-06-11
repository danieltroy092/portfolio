import { Button } from "@components/Button";
import { ButtonLink } from "../components/Button-link";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt="neon turquoise grid on a black background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={i}
          />
        ))}
      </div>

      {/** Content */}
      <div className="hero-content relative container m-auto p-6 sm:max-w-[70vw]">
        <h1>
          <span className="block md:text-lg font-mono motion-preset-slide-down motion-duration-1000">
            Hi, my name is
          </span>
          <span className="block text-5xl md:text-6xl mt-4 font-calibre-bold gradient-text motion-preset-slide-down motion-duration-1000 motion-delay-500">
            Daniel Troy Ong.
          </span>
          <span className="block text-5xl md:text-6xl mt-2 font-calibre-bold gradient-text text-balance motion-preset-slide-down motion-duration-1000 motion-delay-800">
            I build things for the web.
          </span>
        </h1>
        <div className="flex mt-4 lg:w-1/2 motion-preset-slide-down motion-duration-1000 motion-delay-1100">
          <p className="text-lg text-pretty max-w-[500px]">
            I am a front-end developer with 4+ years of experience in creating
            responsive, accessible and pixel-perfect user interfaces utilising{" "}
            <a
              href="https://new.drupal.org/home"
              target="_blank"
              className="link"
            >
              Drupal CMS
            </a>
            .
          </p>
        </div>
        <ButtonLink
          className="inline-block mt-8 py-2 px-6 hover:text-background gradient-button bordered hover:font-semibold focus:font-semibold motion-preset-slide-down motion-duration-1000 motion-delay-1400"
          href="#contact"
        >
          Get in Touch
        </ButtonLink>
      </div>
    </section>
  );
};
