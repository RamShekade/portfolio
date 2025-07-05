
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="experience" className="py-20">
          <Experience />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="awards" className="py-20">
          <Awards />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;
