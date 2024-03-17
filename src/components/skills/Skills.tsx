import "./skills.scss";
import reactsvg from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import css from "../../assets/css.svg";
import docker from "../../assets/docker.svg";
import express from "../../assets/exp.svg";
import html from "../../assets/html.svg";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import mysql from "../../assets/mysql.svg";
import nest from "../../assets/nest.svg";
import node from "../../assets/node.svg";
import postman from "../../assets/postaman.svg";
import tailwind from "../../assets/tailwind.svg";
import sass from "../../assets/sass.svg";
import ts from "../../assets/ts.svg";
import prisma from "../../assets/prisma.svg";
import mongodb from "../../assets/mongodb.svg";
import git from "../../assets/git.svg";
import { motion } from "framer-motion";

function Skills() {
  const skills: { name: string; src: string }[] = [
    {
      name: "Html",
      src: html,
    },
    {
      name: "Css",
      src: css,
    },
    {
      name: "Javascript",
      src: js,
    },
    {
      name: "Typescript",
      src: ts,
    },
    {
      name: "Java",
      src: java,
    },
    {
      name: "MySql",
      src: mysql,
    },
    {
      name: "Mongodb",
      src: mongodb,
    },
    {
      name: "Tailwind CSS",
      src: tailwind,
    },
    {
      name: "Bootstrap",
      src: bootstrap,
    },
    {
      name: "SaSS",
      src: sass,
    },
    {
      name: "ReactJS",
      src: reactsvg,
    },
    {
      name: "NodeJS",
      src: node,
    },
    {
      name: "ExpressJS",
      src: express,
    },
    {
      name: "NestJS",
      src: nest,
    },
    {
      name: "Prisma",
      src: prisma,
    },
    {
      name: "Postman",
      src: postman,
    },
    {
      name: "Docker",
      src: docker,
    },
    {
      name: "Git Source Control",
      src: git,
    },
  ];

  const listVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        // delay: 2.5,
        delay: index * 0.1,
      },
    }),
  };
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
        // delay: 2.5,
        staggerChildren: 0.02,
      },
    },
  };
  return (
    <div id="Skills" className="skills">
      <motion.div
        variants={headVariants}
        initial="initial"
        whileInView="animate"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1, delay: 2 }}
        className="skills-container"
      >
        <motion.div
          // variants={headVariants}
          initial="initial"
          whileInView="animate"
          className="skills-title"
        >
          <motion.h1
            // whileInView="animate"
            // initial="initial"
            variants={headVariants}
          >
            My Skills
          </motion.h1>
          <motion.p
            // whileInView="animate"
            // initial="initial"
            variants={headVariants}
            className="skill-intro"
          >
            The skills, tools and technologies I am quite good at:
          </motion.p>
        </motion.div>
        <div className="skill-display">
          {skills.map((skill, index) => (
            <motion.div
              variants={listVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              className="skill-cart"
            >
              <img src={skill.src} width={50} />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* <div className="bar"></div> */}
    </div>
  );
}

export default Skills;
