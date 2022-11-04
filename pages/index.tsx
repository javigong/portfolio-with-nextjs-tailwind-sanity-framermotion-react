import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

type Props = {};

const Home = (props: Props) => {


  return (
    <div className="bg-[#ede8e824] text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#ede8e824] scrollbar-thumb-green-500/30 scroll-smooth">
      <Head>
        <title>Javier's Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="flex flex-col items-center sticky bottom-2 w-full">
        <p>
          <Link
            className="text-gray-500/50 hover:cursor-pointer hover:text-green-500"
            href="#hero"
          >
            Back to top
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
