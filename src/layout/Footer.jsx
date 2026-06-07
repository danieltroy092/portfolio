export const Footer = () => {
  return (
    <footer className="footer text-xs font-mono text-center p-4 overflow-hidden">
      <p>&copy; {new Date().getFullYear()} Troy Ong. All rights reserved.</p>
      <p>
        Built with{" "}
        <a
          className="text-muted-foreground active:text-highlight hover:text-highlight focus-visible:text-background focus-visible:bg-highlight outline-none"
          href="https://react.dev/learn"
          target="_blank"
        >
          React
        </a>
        ,{" "}
        <a
          className="text-muted-foreground active:text-highlight hover:text-highlight focus-visible:text-background focus-visible:bg-highlight outline-none"
          href="https://vite.dev/"
          target="_blank"
        >
          Vite
        </a>{" "}
        &{" "}
        <a
          className="text-muted-foreground active:text-highlight hover:text-highlight focus-visible:text-background focus-visible:bg-highlight outline-none"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
};
