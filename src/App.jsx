import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddProject from './pages/AddProject'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const [projects, setProjects] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  fetch('/api/projects')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch projects')
      return res.json()
    })
    .then(data => {
      setProjects(data)
      setLoading(false)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
    })
}, [])

const addProject = (newProject) => {
  return fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProject)
  })
    .then(res => res.json())
    .then(saved => setProjects(prev => [...prev, saved]))
}
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home projects={projects} loading={loading} error={error} />} />
          <Route path="/add" element={<AddProject addProject={addProject} />} />
          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
