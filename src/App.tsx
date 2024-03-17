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
  return (
    <div>
      <Cursor />
      <Navbar />
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
