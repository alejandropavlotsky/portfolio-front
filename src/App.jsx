import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./styles/sass/main.scss";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
