export const Experience = () => {
  return (
    <section className="about-content relative w-1/2 m-auto px-4 py-4 mt-48">
      <h2 class="text-2xl">
        <span className="font-mono text-primary">
          {" "}
          <a id="experience">03.</a>
        </span>{" "}
        Where I've worked
      </h2>

      <div className="mt-6">
        <h3>
          Frontend Developer{" "}
          <span className="font-mono text-primary">
            @{" "}
            <a href="https://hoffi.com/" target="_blank">
              Hoffi
            </a>
          </span>
        </h3>
        <p>October 2020 - April 2025</p>

        <ul className="list-disc mt-6">
          <li>
            Developed custom{" "}
            <a href="https://new.drupal.org/home" target="_blank">
              Drupal
            </a>{" "}
            themes with priority to responsiveness and accessibility; enhancing
            user engagement.
          </li>
          <li>
            Standardised code practices; created reusable code boosting eﬃciency
            and minimised cost.
          </li>
          <li>
            Extended site functionality via integration of contributed modules,
            external JS libraries and third-party APIs.
          </li>
          <li>
            Developed custom features via JavaScript and custom modules to meet
            client-speciﬁc demands.
          </li>
          <li>Debugged code issues improving project stability.</li>
          <li>
            Conducted several CMS upgrades from D8 to D11, maintaining and
            extending project lifecycles.
          </li>
          <li>
            Conducted project migrations between{" "}
            <a href="https://wordpress.com/" target="_blank">
              WordPress
            </a>{" "}
            to Drupal with clients that have existing projects.
          </li>
          <li>
            Fulﬁlled accessibility testing in compliance with{" "}
            <a href="https://www.w3.org/mission/">W3C</a> standards (
            <a
              href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag"
              target="_blank"
            >
              WCAG 2.2
            </a>
            ).
          </li>
          <li>
            Led pre-project analysis and technical assessments on a number of
            projects taking full accountability.
          </li>
        </ul>
      </div>
    </section>
  );
};
