import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProject.css'

const CATEGORIES = ['Frontend', 'Full Stack', 'Backend', 'Mobile', 'Other']

function AddProject({ addProject }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    description: '',
    techStack: '',
    liveUrl: '',
    repoUrl: '',
    image: '',
    category: 'Frontend',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.description.trim()) e.description = 'Description is required'
    if (!form.techStack.trim()) e.techStack = 'At least one tech is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)

    const newProject = {
      ...form,
      techStack: form.techStack.split(',').map(t => t.trim()).filter(Boolean),
      image: form.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    }

    addProject(newProject)
      .then(() => navigate('/'))
      .catch(() => {
        setSubmitting(false)
        alert('Failed to save project. Is json-server running?')
      })
  }

  return (
    <div className="add-page">
      <div className="add-header">
        <p className="hero-eyebrow">Portfolio</p>
        <h1 className="add-title">Add New Project</h1>
        <p className="add-sub">Fill in the details below to add a project to your portfolio.</p>
      </div>

      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
            <label htmlFor="title">Project Title *</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. E-Commerce Dashboard"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <span className="error-msg">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className={`form-group full ${errors.description ? 'has-error' : ''}`}>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="What does this project do? What problem does it solve?"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description && <span className="error-msg">{errors.description}</span>}
          </div>

          <div className={`form-group full ${errors.techStack ? 'has-error' : ''}`}>
            <label htmlFor="techStack">Tech Stack * <span className="label-hint">(comma separated)</span></label>
            <input
              id="techStack"
              name="techStack"
              type="text"
              placeholder="React, Node.js, MongoDB"
              value={form.techStack}
              onChange={handleChange}
            />
            {errors.techStack && <span className="error-msg">{errors.techStack}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="liveUrl">Live URL</label>
            <input
              id="liveUrl"
              name="liveUrl"
              type="url"
              placeholder="https://yourapp.com"
              value={form.liveUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="repoUrl">Repository URL</label>
            <input
              id="repoUrl"
              name="repoUrl"
              type="url"
              placeholder="https://github.com/you/repo"
              value={form.repoUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="image">Image URL <span className="label-hint">(optional)</span></label>
            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://... (leave blank for default)"
              value={form.image}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-outline" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Saving...' : 'Add Project →'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProject