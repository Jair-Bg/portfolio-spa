import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddProject from './pages/AddProject'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProject />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
