import "./portfolio.scss";
import Oxford from "../../assets/oxford.jpg";
import Liverpool from "../../assets/liverpool.jpg";
import FindI from "../../assets/findIpic.jpg";
import Erp from "../../assets/erp.jpg";
import PortfolioPic from "../../assets/portfoliopic.jpg";
import { motion } from "framer-motion";

function Portfolio() {
  const projects: {
    image: string;
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }[] = [
    {
      image: Oxford,
      name: "Oxford clone home web page",
      description:
        "This project was one of my first. It was intended to strenghen my knowledge in HTML/CSS,Javascript and the popular framwork Tailwind CSS. It is mobile responsive as the official website",
      technologies: ["HTML", "CSS", "JS", "Tailwind CSS"],
      link: "https://ssl-popatsy-oxford.netlify.app/",
      github: undefined,
    },
    {
      image: Liverpool,
      name: "Liverpool clone home web page",
      description:
        "This project has the same purpose and technology as my first project. It was intended to strenghen my knowledge in HTML/CSS,Javascript and the popular framwork Tailwind CSS. It is mobile responsive as the official website",
      technologies: ["HTML", "CSS", "JS", "Tailwind CSS"],
      link: "https://ssl-popatsy.netlify.app/",
      github: undefined,
    },
    {
      image: Erp,
      name: "Kampala University ERP System",
      description:
        "This project was aimed to improve and overcome the different challenges of the old university's sytem. It Enhances the security and privileges of lecturers and different stakeholder’s actions",
      technologies: ["HTML", "CSS", "JS", "Bootstrap 5", "PHP"],
      link: undefined,
      github: "https://github.com/SahyLiana/university-project",
    },
    {
      image: FindI,
      name: "MERN stack e-commerce (Final Year)",
      description:
        "This project is an e-commerce website that is focusing on electronic devices. It is equiped with an AI ChatBot, Google Map, QR and Bar Code. Therefore, the admin pannel provides Charts with Apex Chart package",
      technologies: ["ReactJS", "Mongodb", "Express", "NodeJS", "Sass"],
      link: undefined,
      github: "https://github.com/SahyLiana/ProjectFolder",
    },
    {
      image: PortfolioPic,
      name: "My actual protfolio (in progress)",
      description:
        "This is my latest project so far. It was intended to show case my different skills.",
      technologies: ["ReactTS", "Sass", "Framer motion"],
      link: "https://ssl-popatsy.netlify.app/",
      github: "https://github.com/SahyLiana/PortfolioTS",
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
        staggerChildren: 0.02,
      },
    },
  };
  const listVariants = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
      },
    }),
  };
  return (
    <div id="Portfolio" className="portfolio">
      <div className="portfolio-container">
        <motion.div
          variants={headVariants}
          initial="initial"
          whileInView="animate"
          className="portfolio-title"
        >
          <h1>Project</h1>
          <p className="portfolio-intro">Things I have built so far</p>
        </motion.div>
        <div className="display-project">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={listVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              className="project-cart"
            >
              <div className="img-container">
                <img src={project.image} />
              </div>
              {/* <img src={project.image} /> */}
              <div className="project-text">
                <h2>{project.name}</h2>
                <div className="bar"></div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <div className="technology">{technology}</div>
                  ))}
                </div>
                <div className="project-footer">
                  {project.link && (
                    <a href={project.link} target="_blank">
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
              {/* <div className="project-footer">
                {project.link && <a href={project.link}>Demo</a>}
                {project.github && <a href={project.github}>Source Code</a>}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
