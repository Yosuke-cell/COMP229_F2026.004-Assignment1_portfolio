// Projects page: cards for the projects I have built, each linking to the live project
import Nav from '../components/Nav.jsx'
import './Projects.css'

// Each object is one project card. To add a project, add another object here.
// description = what the project is, role = what I did, outcome = the result / what I learned
const projects = [
  {
    number: '01',
    title: 'Puzzle Game',
    completed: 'Summer 2026',
    description: 'A drag-and-drop jigsaw puzzle game with 48 pieces that are shuffled into a random order every time the page loads.',
    role: 'I wrote the JavaScript that lets the player grab, move, and drop each piece using pointer events.',
    outcome: 'A working puzzle game in the browser. I learned how to handle mouse and touch events and move elements on the page with JavaScript.',
    image: '/project1/puzzle.png',
    imageAlt: 'Puzzle game picture',
    link: '/project1/project10-01_txt.html',
  },
  {
    number: '02',
    title: 'Product Hotspots',
    completed: 'Winter 2026',
    description: 'A product page for Apple AirPods 4 with a feature list, a price table comparing each generation, and a map of Canada with clickable store hotspots.',
    role: 'I built the whole page by myself using HTML and CSS, including the styled price table and the image map hotspots.',
    outcome: 'A complete product page. I learned how to build tables, image maps, and link an image to a larger detail page.',
    image: '/project2/airpods4.jpg',
    imageAlt: 'AirPods 4 product',
    contain: true,
    link: '/project2/assignment3.html',
  },
  {
    number: '03',
    title: 'Restaurant Website',
    completed: '2026',
    description: 'A multi-page website for an Italian and Japanese fusion restaurant, with a menu, event calendar, photo gallery, location page, and an order estimator.',
    role: 'I built the site as an assignment using HTML, CSS, JavaScript, and jQuery, including the order estimator that adds up the chosen items and 13% tax.',
    outcome: 'A working website with more than 10 pages. I learned how to organize a larger site and add interactive features with JavaScript.',
    image: '/project3/restaurant.jpg',
    imageAlt: 'Restaurant dining room',
    link: '/project3/home.html',
  },
]

function Projects() {
  return (
    <>
      <Nav />
      <h1>My Projects</h1>
      <p id="intro">Here are some of the projects I have built.</p>
      <div id="projects">
        {/* .map() creates one card for each project in the list above */}
        {projects.map((project) => (
          <div className="card" key={project.number}>
            <img
              className={project.contain ? 'card-image contain' : 'card-image'}
              src={project.image}
              alt={project.imageAlt}
            />
            <span className="card-number">{project.number}</span>
            <h3>{project.title}</h3>
            <p className="completed">Completed: {project.completed}</p>
            <p>{project.description}</p>
            <p><strong>My role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
            {/* A normal <a> (not Link) because the old projects are plain HTML files in public/ */}
            <a className="card-button" href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
