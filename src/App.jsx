import { useEffect } from "react";

import { Navbar } from "@layout/Navbar";
import { Footer } from "@layout/Footer";

import { Hero } from "@sections/Hero";
import { About } from "@sections/About";
import { Skills } from "@sections/Skills";
import { Experience } from "@sections/Experience";
import { Projects } from "@sections/Projects";
import { Contact } from "@sections/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);

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
      <Footer />
    </div>
  );
}
