export const About = () => {
  return (
    <section className="profile-content relative container 2xl:w-3/5 m-auto px-6 py-4">
      <h2 class="py-6 text-2xl font-mono">
        <span>
          <a id="about" className="text-primary">
            01.
          </a>
        </span>{" "}
        About Me
      </h2>
      <div className="profile-text flex flex-col-reverse xl:flex-row gap-12 container">
        <div className="xl:w-1/2">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p className="mt-4">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>

          <p className="mt-4">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
        </div>
        <div className="relative xl:w-1/2 ">
          <span className="profile-image block relative size-full"></span>
          <span className="profile-image--accent"></span>
        </div>
      </div>
    </section>
  );
};
