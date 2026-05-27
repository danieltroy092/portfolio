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

export const Projects = () => {
  return (
    <section className="skills-content relative w-2/5 m-auto px-4 py-4 mt-48">
      <h2 class="text-2xl">
        <span className="font-mono text-primary">
          {" "}
          <a id="projects">04.</a>
        </span>{" "}
        Some things I've built
      </h2>

      <ul className="project-list">
        {projectsData.map((project) => (
          <li className="project-item mt-12" key={project.id}>
            <article
              className={`project-teaser flex gap-5 ${project.id % 2 == 0 ? "flex-row-reverse" : ""}`}
            >
              <a className="block w-1/2" href={project.url} target="_blank">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.name}
                />
              </a>
              <div className="project-content w-1/2">
                <span class="font-mono text-primary text-xs">
                  Featured Project
                </span>
                <a href={project.url} target="_blank">
                  <h3 class="mt-2 text-2xl">{project.name}</h3>
                </a>
                <p className="mt-4">{project.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
