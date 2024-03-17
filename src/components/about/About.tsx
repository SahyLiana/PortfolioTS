import "./about.scss";
import AboutMe from "../../assets/about.jpg";
import { motion } from "framer-motion";

function About() {
  const variants = {
    initial: {
      x: -20,
      y: 150,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "backInOut",
      },
    },
  };
  const variants2 = {
    initial: {
      x: 20,
      y: 150,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: "backInOut",
      },
    },
  };
  return (
    <div id="About" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.img
            initial="initial"
            variants={variants}
            whileInView="animate"
            src={AboutMe}
          />
          <motion.div
            initial="initial"
            variants={variants2}
            whileInView="animate"
            className="about-text"
          >
            <h1>About</h1>
            <p className="vision">
              Transforming <span style={{ fontWeight: "bold" }}>Visions </span>
              into <span style={{ fontWeight: "bold" }}>Reality</span>
            </p>
            <p>
              I'm an Undergraduate Student majoring{" "}
              <span style={{ color: "rgb(206, 119, 4)" }}>
                Bachelor of Computer Science and Information Technology
              </span>{" "}
              at Kampala University . I'm a Web Developer with a focus on the
              ReactJS and ExpressJS, but still exploring other technologies and
              frameworks that catch my interest!
            </p>
            <a href="http://localhost:5173/public/CV.pdf">Resume</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
