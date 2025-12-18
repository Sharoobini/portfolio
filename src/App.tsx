import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}