import { useState } from "react";
import { Loader } from "./components/Loader/Loader";
import Background from "./components/Background/Background";
import { Navbar } from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
// import Insights from "./sections/insights/Insights";
import Contact from "./sections/contact/Contact";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Background />
      <Cursor />
      <main role="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};


export default App;
