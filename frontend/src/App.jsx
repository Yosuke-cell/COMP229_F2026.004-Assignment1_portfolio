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
import AdminDashboard from './pages/admin.jsx'
import ListProjects from './components/projects/ListProjects.jsx' 
import AddProject from './components/projects/AddProjects.jsx'
import EditProject from './components/projects/EditProjects.jsx'
import ListServices from './components/services/ListServices.jsx'
import AddService from './components/services/AddServices.jsx'
import EditService from './components/services/EditServices.jsx'
import ListReferences from './components/references/ListReferences.jsx'
import AddReference from './components/references/AddReferences.jsx'
import EditReference from './components/references/EditReferences.jsx'
import ListUsers from './components/users/ListUsers.jsx'
import AddUser from './components/users/AddUsers.jsx'
import EditUser from './components/users/EditUsers.jsx'

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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/projects/list" element={<ListProjects />} />
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/projects/edit/:id" element={< EditProject/>} />
        <Route path="/services/list" element={<ListServices />} />
        <Route path="/services/add" element={<AddService />} />
        <Route path="/services/edit/:id" element={< EditService/>} />
        <Route path="/references/list" element={<ListReferences />} />
        <Route path="/references/add" element={<AddReference />} />
        <Route path="/references/edit/:id" element={< EditReference/>} />
        <Route path="/users/list" element={<ListUsers />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={< EditUser/>} />
        {/* "*" matches any URL not listed above, so unknown pages show the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
