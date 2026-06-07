const expData = [
  "Developed custom Drupal themes with priority to responsiveness and accessibility; enhancing user engagement.",
  "Standardised code practices; created reusable code boosting eﬃciency and minimised cost.",
  "Extended site functionality via integration of contributed modules, external JS libraries and third-party APIs.",
  "Developed custom features via JavaScript and custom modules to meet client-speciﬁc demands.",
  "Debugged code issues improving project stability.",
  "Conducted several CMS upgrades from D8 to D11, maintaining and extending project lifecycles.",
  "Conducted project migrations between WordPress to Drupal with clients that have existing projects.",
  "Fulﬁlled accessibility testing in compliance with W3C standards (WCAG 2.2).",
  "Led pre-project analysis and technical assessments on a number of projects taking full accountability.",
];

export const Experience = () => {
  return (
    <section className="about-content container relative lg:w-4/5 2xl:w-3/5 m-auto px-4 py-4 mt-48">
      <h2 data-aos="fade-up" className="text-2xl font-semibold">
        <a id="experience" className="text-primary font-mono text-lg">
          03.
        </a>{" "}
        <span className="section-title relative">Where I've worked</span>
      </h2>

      <div className="mt-6">
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="text-xl  font-calibre-bold"
        >
          Front-end Developer{" "}
          <span className="text-primary">
            @{" "}
            <a href="https://hoffi.com/" target="_blank">
              Hoffi
            </a>
          </span>
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="text-xs font-mono text-foreground"
        >
          October 2020 - April 2025
        </p>

        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="mt-6 list-custom p-5"
        >
          {expData.map((data, i) => (
            <li className="relative leading-loose" key={i}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
