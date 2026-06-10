const SkillsData = [
  {
    name: "JavaScript (ES6)",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/javascript.png",
  },
  {
    name: "React",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/reactjs.png",
  },
  {
    name: "HTML5",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/html-light.png",
  },
  {
    name: "CSS3",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/png/css3.png",
  },
  {
    name: "Tailwind",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/tailwind.png",
  },
  {
    name: "Sass",
    type: "frontend",
    icon: "https://icon.icepanel.io/Technology/svg/Sass.svg",
  },
  {
    name: "Twig",
    type: "frontend",
    icon: "https://sensiolabs.com/f/42db05ea4984ca23/158x48-twig.webp",
  },
  {
    name: "PHP",
    type: "backend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/php.png",
  },
  {
    name: "MySQL",
    type: "backend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/mysql.png",
  },
  {
    name: "Drupal",
    type: "other",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/drupal.png",
  },

  {
    name: "VS Code",
    type: "tools",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/vscode.png",
  },
  {
    name: "GIT",
    type: "tools",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/git.png",
  },
  {
    name: "Docker",
    type: "tools",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/docker.png",
  },
  {
    name: "Drush",
    type: "tools",
    icon: "https://www.drush.org/13.x/drush_logo-black.png",
  },
  {
    name: "Composer",
    type: "tools",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Composer.png",
  },
  {
    name: "DDEV",
    type: "tools",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/ddev-dark.png",
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
      <h2 data-aos="fade-up" className="text-2xl font-semibold">
        <a id="skills" className="text-primary font-mono text-lg">
          02.
        </a>{" "}
        <span className="section-title relative">What's in my toolbox</span>
      </h2>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="skill-group mt-12"
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
                className="skill-image w-[72px]"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="skill-group mt-12"
      >
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
                className="skill-image w-[72px]"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="skill-group mt-12"
      >
        <h3 className="font-mono text-foreground">TOOLS</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-12 items-center justify-between sm:justify-start">
          {tools.map((skill, i) => (
            <li className="skill-item relative shrink-0 basis-25" key={i}>
              <img
                src={skill.icon}
                alt={`logo for ${skill.name}`}
                className="skill-image w-[72px]"
              />
              <div className="skill-label" role="tooltip">
                <p className="text-sm">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
