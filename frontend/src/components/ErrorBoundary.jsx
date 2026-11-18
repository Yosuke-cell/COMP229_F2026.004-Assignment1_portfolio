import { Component } from 'react'
import { Link } from 'react-router-dom'
import './ErrorBoundary.css'

// ErrorBoundary is a safety net: if any page inside it crashes while rendering,
// it shows a friendly message instead of a blank white screen.
// React only supports error boundaries as class components, so this is not a function.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // Called by React when a child component throws an error; switches to the fallback UI
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // Called after the error is caught; logs the details for debugging
  componentDidCatch(error, errorInfo) {
    console.error('Something went wrong on this page:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="error-page">
          <h1>Oops! Something went wrong.</h1>
          <p>Sorry, this page could not be displayed. Please try again or go back to the home page.</p>
          {/* reloadDocument does a full page reload, which clears the error */}
          <Link className="error-button" to="/" reloadDocument>Back to Home</Link>
        </div>
      )
    }

    // No error: show the page normally
    return this.props.children
  }
}

export default ErrorBoundary
