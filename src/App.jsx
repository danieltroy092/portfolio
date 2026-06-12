import { Navbar } from "@layout/Navbar";
import { Footer } from "@layout/Footer";
import { Socials } from "@layout/Socials";
import { Email } from "@layout/Email";

import { Hero } from "@sections/Hero";
import { About } from "@sections/About";
import { Skills } from "@sections/Skills";
import { Experience } from "@sections/Experience";
import { Projects } from "@sections/Projects";
import { Contact } from "@sections/Contact";

import "react-fade-in-view/dist/index.css";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Email />
      <Socials />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
