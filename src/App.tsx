import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Arrow from "./components/Arrow";
function App() {
  return (
    <>
      <div>
        <div className="mx-auto flex flex-col">
          <div className="min-h-screen flex flex-cols items-center justify-center">
            <Intro />
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
