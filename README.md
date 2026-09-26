# Yosuke Nakamura – Personal Portfolio (React)

COMP229 – Web Application Development, Assignment 1.
A personal portfolio website built with **React** and **Vite**, converted from my earlier HTML/CSS portfolio.

## Pages

| Page | URL | What it shows |
|---|---|---|
| Home | `/` | Welcome message, buttons to every page, mission statement |
| About Me | `/about` | My name, photo, short introduction, link to my resume (PDF) |
| Projects | `/projects` | 3 projects with image, description, my role, outcome, and completion date |
| Services | `/services` | The services I offer |
| References | `/references` | Testimonials with name, company, and position |
| Contact Me | `/contact` | My contact information and a contact form that returns to the Home page |

Any other URL shows a **404 – Page Not Found** page.

## Built with

- [React](https://react.dev/) – components and state (`useState`)
- [React Router](https://reactrouter.com/) – navigation between pages without reloading
- [Vite](https://vite.dev/) – development server and build tool
- HTML, CSS, and JavaScript

## Getting started

You need [Node.js](https://nodejs.org/) installed.

```bash
cd frondend
npm install      # install dependencies (first time only)
npm run dev      # start the development server
```

Then open the address shown in the terminal (usually http://localhost:5173).

Other commands (run inside `frondend/`):

| Command | What it does |
|---|---|
| `npm run build` | Builds the site for deployment into `frondend/dist/` |
| `npm run preview` | Previews the built site locally |
| `npm run lint` | Checks the code for problems |

## Project structure

```
frondend/
├── index.html              # The single HTML page React is loaded into
├── public/                 # Files served as-is
│   ├── Yosuke_Nakamura_Resume.pdf
│   └── project1/, project2/, project3/   # My earlier projects (plain HTML/CSS/JS)
└── src/
    ├── main.jsx            # Entry point: starts React and the router
    ├── App.jsx             # Routes: decides which page to show for each URL
    ├── index.css           # Global styles shared by every page
    ├── assets/             # Logo and photo
    ├── components/
    │   ├── Nav.jsx         # Navigation bar with the custom logo
    │   └── ErrorBoundary.jsx  # Shows a friendly message if a page crashes
    └── pages/              # One component (+ CSS file) per page
        ├── Home.jsx, About.jsx, Projects.jsx
        ├── Services.jsx, References.jsx, Contact.jsx
        └── NotFound.jsx    # 404 page
```

## Error handling

- **404 page:** unknown URLs show a "Page Not Found" page instead of a blank screen.
- **Error boundary:** if a page crashes while rendering, a friendly error message with a "Back to Home" button is shown, and the rest of the site keeps working.
- **Contact form:** sending is wrapped in `try...catch`. If it fails, the user sees an error message and keeps what they typed.

## Author

Yosuke Nakamura – Software Engineering Technician student, Centennial College
