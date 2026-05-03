import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-dot" />
        Jairus Tom<span className="logo-accent">.</span>
      </Link>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
          Projects
        </Link>
        <Link to="/add" className="btn btn-primary nav-cta">
          + Add Project
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
