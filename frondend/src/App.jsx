// App.jsx - the main component. It decides which page to show based on the URL.
import { Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import References from './pages/References.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const location = useLocation()

  return (
    // key={location.pathname} resets the ErrorBoundary when the user goes to another page,
    // so one broken page does not break the whole site
    <ErrorBoundary key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
        {/* "*" matches any URL not listed above, so unknown pages show the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
