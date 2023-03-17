import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Arrow from "./components/Arrow";
function App() {
  return (
    <>
      <div>
        <div className="mx-auto flex flex-col">
          <div className="min-h-screen flex flex-cols items-center justify-center">
            <Intro />
          </div>
          <div className="flex flex-cols items-center justify-center">
            <About />
          </div>
          <div className="flex flex-cols items-center justify-center mb-4">
            <Skills />
          </div>
          <div className="min-h-screen flex flex-cols justify-center">
            <Projects />
          </div>
          <Arrow />
        </div>
      </div>
    </>
  );
}

export default App;
