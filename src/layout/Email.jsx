export const Email = () => {
  return (
    <div className="hidden min-[1536px]:block fixed bottom-0 right-8 left-auto z-10">
      <div className="vertical-accent flex flex-col items-center motion-preset-slide-up motion-duration-2000">
        <a
          className="font-mono text-xs vertical-rl tracking-widest mb-5 hover:text-highlight focus-visible:text-highlight outline-none"
          href="mailto:danieltroy092@gmail.com"
          target="_blank"
          aria-label="Direct email link if you want to reach out."
        >
          danieltroy092@gmail.com
        </a>
      </div>
    </div>
  );
};
