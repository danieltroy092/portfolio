import IconJS from "../assets/skills/javascript.webp";
import IconReact from "../assets/skills/reactjs.webp";
import IconHTML from "../assets/skills/html.webp";
import IconCSS from "../assets/skills/css3.webp";
import iconTailwind from "../assets/skills/tailwind.webp";
import iconSass from "../assets/skills/sass.webp";
import iconTwig from "../assets/skills/twig.webp";
import iconPhp from "../assets/skills/php.webp";
import iconMySQL from "../assets/skills/mysql.webp";
import IconDrupal from "../assets/skills/drupal.webp";
import IconVSCode from "../assets/skills/vscode.webp";
import IconGit from "../assets/skills/git.webp";
import IconDocker from "../assets/skills/docker.webp";
import IconDrush from "../assets/skills/drush_logo-black.webp";
import IconComposer from "../assets/skills//Composer.webp";
import IconDDev from "../assets/skills/ddev-dark.webp";

import { FadeIn } from "react-fade-in-view";

const SkillsData = [
  {
    name: "JavaScript (ES6)",
    type: "frontend",
    icon: IconJS,
  },
  {
    name: "React",
    type: "frontend",
    icon: IconReact,
  },
  {
    name: "HTML5",
    type: "frontend",
    icon: IconHTML,
  },
  {
    name: "CSS3",
    type: "frontend",
    icon: IconCSS,
  },
  {
    name: "Tailwind",
    type: "frontend",
    icon: iconTailwind,
  },
  {
    name: "Sass",
    type: "frontend",
    icon: iconSass,
  },
  {
    name: "Twig",
    type: "frontend",
    icon: iconTwig,
  },
  {
    name: "PHP",
    type: "backend",
    icon: iconPhp,
  },
  {
    name: "MySQL",
    type: "backend",
    icon: iconMySQL,
  },
  {
    name: "Drupal",
    type: "other",
    icon: IconDrupal,
  },

  {
    name: "VS Code",
    type: "tools",
    icon: IconVSCode,
  },
  {
    name: "GIT",
    type: "tools",
    icon: IconGit,
  },
  {
    name: "Docker",
    type: "tools",
    icon: IconDocker,
  },
  {
    name: "Drush",
    type: "tools",
    icon: IconDrush,
  },
  {
    name: "Composer",
    type: "tools",
    icon: IconComposer,
  },
  {
    name: "DDEV",
    type: "tools",
    icon: IconDDev,
  },
];

const frontend = SkillsData.filter((skill) => skill.type === "frontend");
const backend = SkillsData.filter((skill) => skill.type === "backend");
const tools = SkillsData.filter(
  (skill) => skill.type === "other" || skill.type === "tools",
);

export const Skills = () => {
  return (
    <section className="skills-content relative container max-w-(--wrapper-sm) m-auto p-6 mt-24 sm:mt-48">
      <FadeIn
        as="h2"
        direction="up"
        duration={800}
        delay={500}
        once={false}
        className="text-2xl font-semibold"
      >
        <a id="skills" className="text-primary font-mono text-lg">
          02.
        </a>{" "}
        <span className="section-title relative">What's in my toolbox</span>
      </FadeIn>

      <FadeIn
        as="div"
        direction="up"
        className="skill-group mt-12"
        once={false}
      >
        <h3 className="font-mono text-foreground">FRONTEND</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-12 items-center justify-between sm:justify-start">
          {frontend.map((skill, i) => (
            <li
              className="skill-item relative shrink-0 grow-0 basis-25"
              key={i}
            >
              <img
                src={skill.icon}
                alt={`logo for ${skill.name}`}
                className="skill-image w-[72px] hover:motion-translate-y-loop-25"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn as="div" direction="up" className="skill-group mt-12">
        <h3 className="font-mono text-foreground">BACKEND</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-12 items-center justify-between sm:justify-start">
          {backend.map((skill, i) => (
            <li
              className="skill-item relative shrink-0 grow-0 basis-25"
              key={i}
            >
              <img
                src={skill.icon}
                alt={`logo for ${skill.name}`}
                className="skill-image w-[72px] hover:motion-translate-y-loop-25"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn as="div" direction="up" className="skill-group mt-12">
        <h3 className="font-mono text-foreground">TOOLS</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-12 items-center justify-between sm:justify-start">
          {tools.map((skill, i) => (
            <li className="skill-item relative shrink-0 basis-25" key={i}>
              <img
                src={skill.icon}
                alt={`logo for ${skill.name}`}
                className="skill-image w-[72px] hover:motion-translate-y-loop-25"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
};
