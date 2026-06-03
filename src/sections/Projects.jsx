const projectsData = [
  {
    id: 1,
    name: "Digital Public Services Wales",
    image: "dpsw.png",
    url: "https://digitalpublicservices.gov.wales/",
    text: "A government site used by the team tasked to deliver digital public services for the country. Built using the Welsh government GEL design system placing great emphasis on accessibility and design consistency improving user experience.",
  },
  {
    id: 2,
    name: "Creativity Culture Education",
    image: "cce.png",
    url: "https://creativitycultureeducation.org/",
    text: "Built a for a UK non-profit organisation, involving a custom JS feature to better display data regarding the organisation partners along with an integrated mailing system streamlining communications between admin and users.",
  },
  {
    id: 3,
    name: "Universities Wales",
    image: "uniw.png",
    url: "https://uniswales.ac.uk/",
    text: "Built for the group representing Welsh Universities. It involves a custom module that sets a custom theme based on url for specific sections of the site. Additionally external libraries were added such as Masonry & Owl Carousel to improve representation of data enhancing user experience.",
  },
  {
    id: 4,
    name: "Bextra",
    image: "bextra.png",
    url: "https://bextra.cymru/",
    text: "A bilingual website with a Welsh first approach created as a resource used within the Health and Wellbeing curriculum. Built with great emphasis on accurate translations to provide a good experience to user who are Welsh native speakers.",
  },
];

// skills-content relative container md:w-4/5 2xl:w-2/5 m-auto px-6 py-4 mt-48

export const Projects = () => {
  return (
    <section className="skills-content relative container 2xl:w-1/2 m-auto px-6 py-4 mt-48">
      <h2 data-aos="fade-up" className="text-2xl font-semibold">
        <a id="projects" className="text-primary font-mono text-lg">
          04.
        </a>{" "}
        <span className="section-title relative">Some things I've built</span>
      </h2>

      <ul className="project-list">
        {projectsData.map((project, i) => (
          <li
            data-aos={`${(i + 1) % 2 === 0 ? "fade-right" : "fade-left"}`}
            data-aos-duration="1000"
            className="project-item mt-12"
            key={i}
          >
            <article
              className={`project-teaser ${(i + 1) % 2 === 0 ? "reverse" : ""} grid grid-cols-12`}
            >
              <a
                className="project-image block relative overflow-hidden"
                href={project.url}
                target="_blank"
                tabIndex={-1}
              >
                <img src={project.image} alt={project.name} />
              </a>
              <div
                className={`project-content relative ${(i + 1) % 2 === 1 ? "md:text-right" : ""}`}
              >
                <span className="block font-mono text-primary text-xs">
                  Featured Project
                </span>
                <a href={project.url} target="_blank">
                  <h3 className="inline-block mt-2 text-2xl hover:text-primary font-calibre-bold">
                    {project.name}
                  </h3>
                </a>
                <p className="block mt-2 md:p-4 leading-relaxed sm:bg-(--color-surface) text-sm text-pretty">
                  {project.text}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
