import "./education.scss";
import education from "../../assets/education.jpg";
import { motion } from "framer-motion";

function Education() {
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
        duration: 1,
        delay: 0.5,
        ease: "backInOut",
      },
    },
  };
  return (
    <div id="Education" className="education">
      <div className="education-container">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="education-text"
        >
          <h1>Education Background</h1>
          <h2>Kampala University (2021-2024)</h2>
          <p>Bachelor of Computer Science & Information Technology</p>
          <p>
            Overall CGPA:
            <span>
              <span style={{ fontWeight: "bold" }}>4.72/5.0</span>, First Class
              Honours (Department's best student)
            </span>
          </p>
          <h2>Relevant Courses</h2>
          <p>
            Discrete Math, Management Information System, Computational Math,
            Computer Organization & Architecture, Programming Methodology (C),
            Computer networking & Data Communication, System Analysis and
            Design, Information System Security, Visual Programming (VB),
            Database Programming (SQL, Oracle), Software Engineering, Java
            Programming, Linux OS, Design and Analysis of Algorithms, Web
            Programming, Data Structure in C++, Distributed Systems and
            Client/Server Computing, Multimedia Technologies & Application
            Design, AI and ES etc...
          </p>
          <a href="transcript.pdf">See Transcript</a>
        </motion.div>
        <motion.div
          variants={variants2}
          initial="initial"
          whileInView="animate"
          className="bar"
        ></motion.div>
        <motion.img
          variants={variants2}
          initial="initial"
          whileInView="animate"
          src={education}
        />
      </div>
    </div>
  );
}

export default Education;
