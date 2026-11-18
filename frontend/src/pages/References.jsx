// References page: testimonials from people I have worked with
import Nav from '../components/Nav.jsx'
import './References.css'

// Each object is one reference card.
const references = [
  {
    number: '01',
    name: 'Gyubin',
    company: 'Centennial College',
    position: 'Software Engineering Technician Student',
    testimonial: 'I would like to work with you guys.',
    email: 'Gyubin@example.com',
    phone: '123456789',
  },
  {
    number: '02',
    name: 'Tolga',
    company: 'Centennial College',
    position: 'Software Engineering AI Student',
    testimonial: 'I would like to work with you guys.',
    email: 'Tolga@example.com',
    phone: '356789966',
  },
  {
    number: '03',
    name: 'Huwan',
    company: 'Centennial College',
    position: 'Software Engineering Technician Student',
    testimonial: 'I would like to work with you guys.',
    email: 'Huwan@example.com',
    phone: '3628739237',
  },
]

function References() {
  return (
    <>
      <Nav />
      <h1>References</h1>
      <p id="intro">Here are the people I worked with in class and on projects.</p>
      <div id="references">
        {/* .map() creates one card for each person in the list above */}
        {references.map((person) => (
          <div className="box" key={person.number}>
            <span className="box-number">{person.number}</span>
            <h3>{person.name}</h3>
            <p className="position">{person.position}, {person.company}</p>
            <blockquote className="testimonial">“{person.testimonial}”</blockquote>
            <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
            <p>Phone number: {person.phone}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default References
