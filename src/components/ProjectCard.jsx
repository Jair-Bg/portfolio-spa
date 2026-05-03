import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const { id, title, description, techStack, image, category } = project

  return (
    <Link to={`/project/${id}`} className="project-card">
      <div className="card-image-wrap">
        <img src={image} alt={title} className="card-image" />
        <span className="card-category">{category}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-stack">
          {techStack.map(tech => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
