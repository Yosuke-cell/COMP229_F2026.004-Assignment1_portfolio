// Nav - the navigation bar with my logo, shown at the top of every page except Home
import { Link } from "react-router-dom";
import logo from "../assets/image_portfolio.png";
import "./Nav.css";

function Nav() {
  return (
    <div id="nav">
      {/* Custom logo and site title */}
      <span id="nav-title">
        <img id="nav-logo" src={logo} alt="Portfolio logo" />
        My Portfolio
      </span>
      {/* Link changes the page without reloading, unlike a normal <a> tag */}
      <ul>
        {/* Each link has a Font Awesome icon in front of its text */}
        <li>
          <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
        </li>
        <li>
          <Link to="/about"><i className="fa-solid fa-user"></i> About me</Link>
        </li>
        <li>
          <Link to="/projects"><i className="fa-solid fa-folder-open"></i> Projects</Link>
        </li>
        <li>
          <Link to="/services"><i className="fa-solid fa-briefcase"></i> Services</Link>
        </li>
        <li>
          <Link to="/references"><i className="fa-solid fa-comments"></i> References</Link>
        </li>
        <li>
          <Link to="/contact"><i className="fa-solid fa-envelope"></i> Contact me</Link>
        </li>
        <li>
          <Link to="/admin"><i className="fa-solid fa-gear"></i> Admin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
