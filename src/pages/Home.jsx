import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Home.css'

function Home() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  const filtered = projects.filter(p =>
  p.title.toLowerCase().includes(search.toLowerCase()) ||
  p.description.toLowerCase().includes(search.toLowerCase()) ||
  p.category.toLowerCase().includes(search.toLowerCase()) ||
  p.techStack.some(t => t.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="home">
      <div className="home-hero">
        <p className="hero-eyebrow">Selected Work</p>
        <h1 className="hero-title">
          Projects &<br /><span className="hero-accent">Experiments</span>
        </h1>
        <p className="hero-sub">
          A collection of things I've built — from full-stack apps to UI experiments.
        </p>
      </div>

      <div className="search-wrap">
        <input
       type="text"
       className="search-input"
       placeholder="Search by title, tech, category..."
       value={search}
       onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No projects yet. <a href="/add">Add your first one →</a></p>
        </div>
      ) : (
        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home