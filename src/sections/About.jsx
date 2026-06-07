export const About = () => {
  return (
    <section className="profile-content relative container 2xl:w-3/5 m-auto px-6 py-4">
      <h2 data-aos="fade-right" className="py-6 text-2xl font-semibold">
        <a id="about" className="text-primary font-mono text-lg">
          01.
        </a>{" "}
        <span className="section-title relative">About Me</span>
      </h2>
      <div className="profile-text flex flex-col-reverse items-center gap-12 container lg:flex-row lg:items-start">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="xl:w-1/2"
        >
          <p></p>

          <p className="mt-4">
            Hello! I'm Troy from Newport, Wales. My passion for web development
            started in my early teenage years when I began tinkering with{" "}
            <a
              href="https://www.webdesignmuseum.org/gallery/bebo-in-2008"
              target="_blank"
            >
              Bebo themes
            </a>{" "}
            to personalize my profile, aiming to show some creativity and
            impress my friends.
          </p>

          <p className="mt-4">
            That experience taught me a lot about HTML and CSS, and it sparked
            my interest to dive deeper, setting me on a path to a career in
            tech. It eventually led me to sign up for a Computer Science course
            at the{" "}
            <a href="https://www.uwe.ac.uk/about" target="_blank">
              University of the West of England (UWE)
            </a>
            , where I graduated in 2019.
          </p>

          <p className="mt-4">
            Fast-forward to today, where I've had the privilege of working for a{" "}
            <a href="https://hoffi.com/who-we-are" target="_blank">
              digital design agency
            </a>{" "}
            that allowed me to hone and improve my skills in building
            aesthetically pleasing, accessible and robust technical solutions
            for the world wide web.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative xl:w-1/2 "
        >
          <span
            className="profile-image block relative"
            aria-label="a portrait image of Troy; a south east asian man with brown skin, dark hair and goatee"
          ></span>
          <span className="profile-image--accent"></span>
        </div>
      </div>
    </section>
  );
};
