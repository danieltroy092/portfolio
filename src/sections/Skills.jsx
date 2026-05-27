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
    name: "Twig",
    type: "frontend",
    icon: "https://sensiolabs.com/f/42db05ea4984ca23/158x48-twig.webp",
  },
  {
    name: "CSS3",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/png/css3.png",
  },
  {
    name: "Sass",
    type: "frontend",
    icon: "https://icon.icepanel.io/Technology/svg/Sass.svg",
  },
  {
    name: "Tailwind",
    type: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/tailwind.png",
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
    name: "DDEV",
    type: "tools",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/ddev-dark.png",
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
];

const frontend = SkillsData.filter((skill) => skill.type === "frontend");
const backend = SkillsData.filter((skill) => skill.type === "backend");
const tools = SkillsData.filter(
  (skill) => skill.type === "other" || skill.type === "tools",
);

export const Skills = () => {
  return (
    <section className="skills-content relative w-2/5 m-auto px-4 py-4 mt-48">
      <h2 class="text-2xl">
        <span className="font-mono text-primary">
          {" "}
          <a id="skills">02.</a>
        </span>{" "}
        Skills + Tools
      </h2>

      <div className="skill-group mt-12">
        <h3 className="font-mono text-primary">FRONTEND</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-6">
          {frontend.map((skill) => (
            <li className="skill-item flex items-center shrink-0 grow-0 basis-20 cursor-pointer">
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-group mt-12">
        <h3 className="font-mono text-primary">BACKEND</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-6">
          {backend.map((skill) => (
            <li className="skill-item flex items-center shrink-0 grow-0 basis-20 cursor-pointer">
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-group mt-12">
        <h3 className="font-mono text-primary">TOOLS</h3>
        <ul className="skill-list flex flex-wrap mt-4 gap-6">
          {tools.map((skill) => (
            <li className="skill-item flex items-center shrink-0 grow-0 basis-20 cursor-pointer">
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
