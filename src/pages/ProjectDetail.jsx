import { useParams, useNavigate, Link } from 'react-router-dom'
import './ProjectDetail.css'

function ProjectDetail({ projects }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects.find(p => String(p.id) === String(id))

  if (projects.length > 0 && !project) {
    navigate('/')
    return null
  }

  if (!project) return (
    <div className="status-state">
      <div className="spinner" />
      <p>Loading project...</p>
    </div>
  )

  const { title, description, techStack, liveUrl, repoUrl, image, category } = project

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Projects</Link>

      <div className="detail-hero">
        <div className="detail-meta">
          <span className="detail-category">{category}</span>
          <h1 className="detail-title">{title}</h1>
          <p className="detail-description">{description}</p>
          <div className="detail-stack">
            {techStack.map(tech => (
              <span key={tech} className="stack-tag">{tech}</span>
            ))}
          </div>
          <div className="detail-actions">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo ↗
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                View Code
              </a>
            )}
          </div>
        </div>

        <div className="detail-image-wrap">
          <img src={image} alt={title} className="detail-image" />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail