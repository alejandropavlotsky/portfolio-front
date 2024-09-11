import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import "./styles/sass/main.scss";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
