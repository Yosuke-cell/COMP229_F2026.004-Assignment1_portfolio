// Nav - the navigation bar with my logo, shown at the top of every page except Home
import { Link } from 'react-router-dom'
import logo from '../assets/image_portfolio.png'
import './Nav.css'

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/references">References</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </div>
  )
}

export default Nav
