// import React from "react";
// import { useState } from "react";
import "./language.scss";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
// import { useRef } from "react";

function Languages() {
  const languages: { lang: string; num: number; level: string }[] = [
    {
      lang: "MALAGASY",
      num: 100,
      level: "Native",
    },
    {
      lang: "FRENCH",
      num: 90,
      level: "Fluent",
    },
    {
      lang: "ENGLISH",
      num: 90,
      level: "Fluent",
    },
    {
      lang: "CHINESE",
      num: 75,
      level: "Professional working proficiency",
    },
  ];

  const headVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        // staggerChildren: 0.9,
      },
    },
  };

  const skillVariant = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  // const ref: any = useRef(null);

  const displayLanguage = languages.map((language, index) => (
    <motion.div
      variants={skillVariant}
      initial="initial"
      whileInView="animate"
      className="display-line"
      key={index}
      custom={index}
    >
      <div className="lang-text">
        <p style={{ fontWeight: "bold" }}>{language.lang}</p>
        <p style={{ color: "gray" }}>{language.level}</p>
      </div>
      <ProgressBar
        // ref={ref}
        className="progress"
        completed={language.num}
        maxCompleted={100}
        animateOnRender={true}
        bgColor=" rgb(5, 211, 234)"
        customLabel=" "
        height="25px"
      />
    </motion.div>
  ));

  return (
    <div className="languages" id="Languages">
      {/* <div className="bar"></div> */}
      <div className="languages-container">
        <motion.div
          variants={headVariants}
          initial="initial"
          whileInView="animate"
        >
          <hr />
          <h1 style={{ marginTop: "50px" }}>Languages</h1>
          <p className="language-intro">I can speak</p>
        </motion.div>

        <div className="display-lang">
          {/* <p>Display here</p> */}
          {displayLanguage}
        </div>
      </div>
    </div>
  );
}

export default Languages;
