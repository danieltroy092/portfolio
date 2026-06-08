export const Email = () => {
  return (
    <div className="fixed bottom-0 right-20 left-auto z-10">
      <div className="vertical-accent flex flex-col items-center">
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
