import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Hero />
      <Resume /> {/* Add your Resume button here */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
