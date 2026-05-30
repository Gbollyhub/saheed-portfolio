import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div style={{ background: "#111111", color: "#F5F5F5", fontFamily: "'Exo 2', sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
}
