import "./experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
function Experience() {
  const headVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        // staggerChildren: 0.02,
      },
    },
  };
  return (
    <div id="Experience" className="experience">
      <motion.div
        variants={headVariants}
        initial="initial"
        whileInView="animate"
        className="experience-container"
      >
        <div className="experience-intro">
          {" "}
          <h1>Experience</h1>
          <p className="experience-text">
            Here is a quick summary of my most recent experience
          </p>
        </div>
        <VerticalTimeline className="timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(33, 150, 243,0.3)",
              color: "rgb(167, 165, 165)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(33, 150, 243,0.3)",
            }}
            date="Dec.2022 - Feb.2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3
              style={{
                fontSize: "30px",
                color: "whitesmoke",
                marginBottom: "5px",
              }}
              className="vertical-timeline-element-title"
            >
              Internship
            </h3>
            <h4
              style={{ color: "whitesmoke" }}
              className="vertical-timeline-element-subtitle"
            >
              Urban Host IT Ltd,UG
            </h4>
            <hr />
            <div style={{ fontStyle: "italic", marginTop: "10px" }}>
              <p style={{ margin: "0", fontSize: "15px" }}>
                Advisor:Mr Egessa Micheal
              </p>
              <p style={{ margin: "0", fontSize: "15px" }}>
                Supervisor:Ms Brenda Kintu Nakirya
              </p>
            </div>

            <ul>
              <li>Software development using PHP, WordPress, Joomla and Git</li>
              <li>
                Online Coffee Shop mobile application using Android Studio
              </li>
              <li>Chipper Cash web interface using Bootstrap 5.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(33, 150, 243,0.3)",
              color: "rgb(167, 165, 165)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(33, 150, 243,0.3)",
            }}
            date="Aug.2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3
              style={{
                fontSize: "30px",
                color: "whitesmoke",
                marginBottom: "5px",
              }}
              className="vertical-timeline-element-title"
            >
              Dean of Computer Science's Assistant
            </h3>
            <h4
              style={{ color: "whitesmoke" }}
              className="vertical-timeline-element-subtitle"
            >
              Kampala University,UG
            </h4>
            <hr />
            <ul>
              <li>Inserted student’s marks</li>
              <li>
                nformed students about events, meetings, PPTs and assignments.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* <h1>Experience</h1>
        <p>Here is a quick summary of my most recent experience</p> */}
      </motion.div>
    </div>
  );
}

export default Experience;
