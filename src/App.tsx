import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Preloader } from "./components/Preloader/Preloader";
import { Navbar } from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import { Footer } from "./components/Footer/Footer";
gsap.registerPlugin(useGSAP);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Background />
      <main
        role="main"
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 1.5s ease",
        }}
      >
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
