import { Navbar } from "@layout/Navbar";

import { Hero } from "@sections/Hero";
import { About } from "@sections/About";
import { Skills } from "@sections/Skills";
import { Experience } from "@sections/Experience";
import { Projects } from "@sections/Projects";
import { Contact } from "@sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
