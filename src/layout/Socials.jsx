import SvgGithub from "../assets/socials/github.svg?react";
import SvgInsta from "../assets/socials/instagram.svg?react";
import SvgBattle from "../assets/socials/battle.svg?react";
import SvgLinkedin from "../assets/socials/linkedin.svg?react";

const socialsData = [
  {
    name: "github",
    icon: <SvgGithub />,
    url: "https://github.com/danieltroy092",
  },
  {
    name: "linkedin",
    icon: <SvgLinkedin />,
    url: "https://www.linkedin.com/in/danieltroy092/",
  },
  {
    name: "instagram",
    icon: <SvgInsta />,
    url: "https://www.instagram.com/tr0yyy.92/",
  },
  {
    name: "css battle",
    icon: <SvgBattle />,
    url: "https://cssbattle.dev/player/danieltroy092",
  },
];

export const Socials = () => {
  return (
    <div className="socials fixed bottom-0 left-20 z-10 right-auto">
      <ul className="socials-list flex items-center flex-col gap-5 vertical-accent">
        {" "}
        {socialsData.map((social, i) => (
          <li className="social-item size-[20px]" key={i}>
            <a
              href={social.url}
              className="social-link block outline-none m-auto"
              target="_blank"
              aria-label={`An external link leading to ${social.name} website.`}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
