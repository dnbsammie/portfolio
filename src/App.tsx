import { lazy, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Preloader } from "./components/Preloader/Preloader";
import { Navbar } from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
// import Blog from "./sections/blog/Blog";
import Contact from "./sections/contact/Contact";
gsap.registerPlugin(useGSAP);

const Background = lazy(() => import("./components/Background/Background"));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Background />
      <Cursor />
      <main role="main" style={{ opacity: loading ? 0 : 1, transition: "opacity 1.5s ease", }} >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
