import "./banner.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Robot from "../../assets/robot.png";

function Banner() {
  const text_university: String[] =
    "Computer Science student at Kampala University,Uganda".split(" ");
  const variants = {
    initial: {
      x: 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        // straggerChildren: 3,
        delay: 1,
      },
    },
    exit: {
      x: 20,
      y: 100,
      opacity: 0,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };
  const variants2 = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    // exit: {
    //   x: 20,
    //   opacity: 0,
    //   transition: {
    //     duration: 5,
    //   },
    // },
  };

  return (
    <div id="Home" className="banner">
      <div className="banner-content">
        {/* <AnimatePresence> */}
        <motion.div
          variants={variants2}
          initial="initial"
          whileInView="animate"
          // exit="exit"
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   duration: 1,
          //   delay: 1,
          // }}
          className="banner-intro"
        >
          <p className="intro">
            Hi there!I am <br />
            <span>
              <TypeAnimation
                sequence={[
                  "Sandamahery Sahy Liana",
                  3000,
                  "from Madagascar",
                  2000,
                  "a Full Stack Developer</>",
                  2000,
                ]}
                repeat={Infinity}
              />
            </span>
          </p>
          <div className="bar"></div>

          <p className="university">
            {text_university.map((el, i) => (
              <motion.span key={i}>{el} </motion.span>
            ))}
          </p>

          <div className="btn-group">
            <a className="link-btn" href="#Contact">
              Contact
            </a>
            <a className="link-btn transcript" href="transcript.pdf">
              My transcript
            </a>
          </div>
        </motion.div>
        {/* </AnimatePresence> */}
        <motion.img
          src={Robot}
          variants={variants}
          initial="initial"
          whileInView="animate"
          // exit="exit"
        />
      </div>
    </div>
  );
}

export default Banner;
