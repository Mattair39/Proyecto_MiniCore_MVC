import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../api'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.get('/projects/').then(r => setProjects(r.data))
  }, [])

  const handleDelete = id => {
    API.delete(`/projects/${id}/`).then(() => {
      setProjects(projects.filter(p => p.id !== id))
    })
  }

  return (
    <div>
      <button
        className="btn-primary"
        onClick={() => window.location.href = '/projects/new'}
      >
        Agregar Proyecto
      </button>

      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Proyecto</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.name}</td>
              <td>
                <Link to={`/projects/edit/${p.id}`} className="icon-btn">✏️</Link>
              </td>
              <td>
                <button
                  className="icon-btn"
                  onClick={() => handleDelete(p.id)}
                >🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
