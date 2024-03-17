import "./navbar.scss";
import Photo from "../../assets/li.jpg";
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
  return (
    <div className="navbar">
      <a href="#Home">
        <img src={Photo} />
      </a>

      <ul>
        {links.map((link) => (
          <li>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
