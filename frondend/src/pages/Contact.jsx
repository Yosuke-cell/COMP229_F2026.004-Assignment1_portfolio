// Contact page: shows my contact details and a form that sends the visitor back to Home.
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import './Contact.css'

// My contact details shown in the info panel
const contactInfo = {
  email: 'huku1128yoke0904@gmail.com',
  phone: '437-349-2567',
  location: 'Toronto, ON',
}

// Starting (empty) values for every field in the form
const emptyForm = { firstName: '', lastName: '', phone: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)        // what the user has typed
  const [errorMessage, setErrorMessage] = useState('') // shown if sending fails
  const navigate = useNavigate()                      // lets us change page from code

  // Runs every time the user types in any input.
  // event.target.name is the input's name, so one function updates every field.
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // Runs when the user clicks "Send": capture the form data, then go back to Home.
  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page
    try {
      console.log('Contact form submitted:', form)
      // The form data is passed to the Home page so it can show a thank-you message
      navigate('/', { state: { contactForm: form } })
    } catch (error) {
      // If anything goes wrong, keep the user's input and tell them instead of crashing
      console.error('Could not send the contact form:', error)
      setErrorMessage('Sorry, your message could not be sent. Please try again.')
    }
  }

  return (
    <>
      <Nav />
      <h1>Contact me</h1>
      <p id="intro">Send me a message and I will get back to you.</p>
      <div id="contact-page">
        <div id="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p><strong>Phone:</strong> {contactInfo.phone}</p>
          <p><strong>Location:</strong> {contactInfo.location}</p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="First name"
                value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Last name"
                value={form.lastName} onChange={handleChange} required />
            </div>
          </div>

          <label htmlFor="phone">Contact Number</label>
          <input type="tel" id="phone" name="phone" placeholder="123-456-7890"
            value={form.phone} onChange={handleChange} />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or question"
            value={form.message} onChange={handleChange} required />

          <button type="submit" className="contact-button">Send</button>
          {/* Only shown when errorMessage is not empty */}
          {errorMessage && <p className="form-error">{errorMessage}</p>}
        </form>
      </div>
    </>
  )
}

export default Contact
