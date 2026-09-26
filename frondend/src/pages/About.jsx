// About Me page: my name, photo, a short introduction, and a link to my resume
import Nav from '../components/Nav.jsx'
import photo from '../assets/photo.jpeg'
import './About.css'

function About() {
  return (
    <>
      <Nav />
      <div id="about">
        <div id="about-text">
          <h2>Learn about me</h2>
          <p>My name is Yosuke Nakamura and I am a software Engineering technician at Centennial College. I would like to improve my skills and learn about software engineering.
            In the future, I would like to work as a software engineer and contribute to the development of innovative software solutions.
          </p>
          {/* The PDF lives in public/, so it is served at /Yosuke_Nakamura_Resume.pdf */}
          <div id="resume">
            <h4><a href="/Yosuke_Nakamura_Resume.pdf" target="_blank" rel="noopener noreferrer">Go to my resume</a></h4>
          </div>
        </div>
        <img src={photo} alt="About Me" />
      </div>
    </>
  )
}

export default About
