const projectsData = [
  {
    id: 1,
    name: "Digital Public Services Wales",
    image: "dpsw.png",
    url: "https://digitalpublicservices.gov.wales/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 2,
    name: "Creativity Culture Education",
    image: "cce.png",
    url: "https://creativitycultureeducation.org/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 3,
    name: "Universities Wales",
    image: "uniw.png",
    url: "https://uniswales.ac.uk/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 4,
    name: "Bextra",
    image: "bextra.png",
    url: "https://bextra.cymru/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
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
                <p className="block mt-2 md:p-4 leading-relaxed sm:bg-(--color-surface)">
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
