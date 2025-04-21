// frontend/src/components/Layout.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container app-container">
          <Link to="/" className="brand">Mini Core de Tareas</Link>
          <ul className="nav-list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tasks">Tareas</Link></li>
            <li className="dropdown">
              <span className="dropdown-toggle">Información Extra ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/employees">Empleados</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="app-container">
        {children}
      </div>
    </>
  )
}
