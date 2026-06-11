export const About = () => {
  return (
    <section className="profile-content relative p-6 max-w-(--wrapper-base) m-auto">
      <h2 className="py-6 text-2xl font-semibold intersect:motion-preset-slide-right intersect:motion-opacity-in motion-duration-1000 motion-delay-500">
        <a id="about" className="text-primary font-mono text-lg">
          01.
        </a>{" "}
        <span className="section-title relative">About Me</span>
      </h2>
      <div className="profile-text flex flex-col-reverse items-center gap-10 container sm:flex-row sm:items-start">
        <div className="sm:basis-[50%] intersect:motion-preset-slide-right intersect:motion-opacity-in motion-duration-1000 motion-delay-500">
          <p></p>

          <p className="mt-4 text-pretty">
            Hello! I'm Troy from Newport, Wales. My passion for web development
            started in my early teenage years when I began tinkering with{" "}
            <a
              className="link"
              href="https://en.wikipedia.org/wiki/Bebo"
              target="_blank"
            >
              Bebo
            </a>{" "}
            skins to personalise my profile, aiming to show some creativity and
            impress my friends.
          </p>

          <p className="mt-4 text-pretty">
            That experience taught me a lot about HTML and CSS, and it sparked
            my interest to dive deeper, setting me on a path to a career in
            tech. It eventually led me to sign up for a Computer Science course
            at the{" "}
            <a
              className="link"
              href="https://www.uwe.ac.uk/about"
              target="_blank"
            >
              University of the West of England (UWE)
            </a>
            , where I graduated in 2019.
          </p>

          <p className="mt-4 text-pretty">
            Fast-forward to today, where I've had the privilege of working for a{" "}
            <a
              className="link"
              href="https://hoffi.com/who-we-are"
              target="_blank"
            >
              digital design agency
            </a>{" "}
            that allowed me to hone and improve my skills in building
            aesthetically pleasing, accessible and robust technical solutions
            for the world wide web.
          </p>
        </div>
        <div className="relative sm:basis-[50%] intersect:motion-preset-slide-left intersect:motion-opacity-in motion-duration-1000 motion-delay-500">
          <span
            className="profile-image block relative size-[200px] sm:size-[280px]  rounded-sm brightness-80"
            aria-label="a portrait image of Troy; a south east asian man with brown skin, dark hair and goatee"
          ></span>
          <span className="profile-image--accent absolute inset-[0] z-[-2] size-[200px] sm:size-[280px] border-3 border-solid border-(--color-primary) rounded-sm"></span>
        </div>
      </div>
    </section>
  );
};
