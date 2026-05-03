# Portfolio SPA

A personal project showcase built with **React + Vite + React Router**.

## Features
- 🏠 Landing page displaying all projects
- ➕ Form to dynamically add new projects
- 🔍 Detailed project view via client-side routing
- 💾 Persisted in localStorage (swap for an API/db as needed)
- 📱 Responsive layout

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx / .css
│   └── ProjectCard.jsx / .css
├── pages/
│   ├── Home.jsx / .css
│   ├── AddProject.jsx / .css
│   └── ProjectDetail.jsx / .css
├── data/
│   └── projects.js        # seed data
├── styles/
│   └── global.css
├── App.jsx                # routes
└── main.jsx               # entry point
```

## Getting Started
```bash
npm install
npm run dev
```

## Routes
| Path | Page |
|---|---|
| `/` | Home — project grid |
| `/add` | Add a new project |
| `/project/:id` | Project detail view |
