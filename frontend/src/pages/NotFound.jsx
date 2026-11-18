import { Link, useLocation } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import '../components/ErrorBoundary.css'

// 404 page: shown when the URL does not match any page (for example /abc)
function NotFound() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <div id="error-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page <strong>{location.pathname}</strong> does not exist.</p>
        <Link className="error-button" to="/">Back to Home</Link>
      </div>
    </>
  )
}

export default NotFound
