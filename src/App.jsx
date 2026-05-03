import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Contact />
      </div>
    </div>
  );
}

export default App;