// Services page: the kinds of work I offer, plus a button to the Contact page
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import './Services.css'

// Each object is one service box. To add a service, add another object here.
const services = [
  {
    number: '01',
    title: 'Software Developer',
    description: 'I build web applications from the front end to the finished product, using HTML, CSS, and JavaScript.',
  },
  {
    number: '02',
    title: 'Backend Developer',
    description: "I create servers, APIs, and databases that keep an application's data safe and working.",
  },
  {
    number: '03',
    title: 'QA Tester',
    description: 'I test software to find bugs early and make sure every feature works as expected.',
  },
  {
    number: '04',
    title: 'Data Designer',
    description: 'I design how data is organized and stored so it is easy to use and understand.',
  },
]

function Services() {
  return (
    <>
      <Nav />
      <h1>My Services</h1>
      <p id="intro">Here are the services I offer.</p>
      <div id="services">
        {/* .map() creates one box for each service in the list above */}
        {services.map((service) => (
          <div className="box" key={service.number}>
            <span className="box-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div id="services-contact">
        <p>Interested in working together?</p>
        <Link className="services-button" to="/contact">Contact me</Link>
      </div>
    </>
  )
}

export default Services
