import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./styles/sass/main.scss";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <Header />
      <About />
      <Projects />
      <Footer />
    </Suspense>
  );
}

export default App;
