import { useEffect, useState } from "react";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Languages";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // console.log("OffsetTop is:" + sectionTop);
        const sectionHeight = section.clientHeight;

        // console.log("ClientHeight is" + sectionHeight);
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.id;
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  // console.log(activeSection);
  return (
    <div>
      <Cursor />
      <Navbar activeSection={activeSection} />
      <Banner />
      <About />
      <Education />
      <Skills />
      <Languages />
      <Portfolio />
      <Experience />
      <Contact />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
