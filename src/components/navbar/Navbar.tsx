import "./navbar.scss";
import Photo from "../../assets/li.jpg";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

function Navbar() {
  const links: String[] = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Portfolio",
    "Experience",
    "Contact",
  ];

  const [changeBackground, setChangeBackground] = useState(false);
  useEffect(() => {
    const changeFunction = () => {
      if (window.scrollY > 100) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", changeFunction);
    return () => {
      window.removeEventListener("scroll", changeFunction);
    };
  }, []);
  console.log(changeBackground);
  return (
    <div className="navbar">
      <a href="#Home">
        <img src={Photo} />
      </a>

      <ul className={changeBackground ? "sticky" : ""}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
