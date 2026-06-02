export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={i}
          />
        ))}
      </div>

      {/** Content */}
      <div className="hero-content relative container m-auto px-6 py-6 2xl:w-3/5">
        <h1 className="text-primary md:text-xl font-mono">Hi, my name is</h1>
        <h2 className="text-4xl md:text-6xl mt-6 font-calibre-bold">
          Daniel Troy Ong.
        </h2>
        <p className="text-4xl md:text-6xl mt-2 font-calibre-bold">
          I build things for the web.
        </p>

        <div className="mt-6 lg:w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
