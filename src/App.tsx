import { LanguageProvider } from "./i18n/LanguageContext";
import Background from "./components/Background";
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About";
import Footer from "./components/Footer"
import Projects from "./sections/Projects";
import Expertise from "./sections/Expertise";
function App() {

  return (
    <>
      <LanguageProvider>
        <Background />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Expertise />
        </main>
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
