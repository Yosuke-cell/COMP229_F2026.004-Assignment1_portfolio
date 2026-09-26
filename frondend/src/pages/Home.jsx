// Home page: welcome message, buttons to every page, and my mission statement
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/image_portfolio.png'
import './Home.css'

function Home() {
  // If the user was sent here from the Contact form, the form data is in location.state
  const location = useLocation()
  const contactForm = location.state?.contactForm

  return (
    <div id="home">
      {/* Only shown after the contact form is sent */}
      {contactForm && (
        <p id="thank-you">
          Thank you, {contactForm.firstName} {contactForm.lastName}! Your message has been received.
        </p>
      )}
      <div id="header">
        <img id="logo" src={logo} alt="Portfolio logo" />
        <h1>Welcome to my Portfolio</h1>
      </div>
      {/* Big menu buttons (the Home page uses these instead of the Nav bar) */}
      <div>
        <ul id="home-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/references">References</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
      </div>
      <div id="mission">
        <h3>Mission statement</h3>
        <p>I am a Software Engineering technician student at Centennial College. I'm interested in web development, data, software engineering, and some programming languages in general.
          My career goal is to improve my skills, for example, not only web development but also data and backend. I would like to seek to learn more about the software engineering field.
          This area has brought me a lot of opportunities to learn about the software like computer programming, web development, and how the software engineer is working in the real life.
        </p>
      </div>
    </div>
  )
}

export default Home
