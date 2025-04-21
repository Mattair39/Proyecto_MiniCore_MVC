import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api'

export default function ProjectForm() {
  const { id } = useParams()
  const nav = useNavigate()
  const [project, setProject] = useState({ name: '' })

  useEffect(() => {
    if (id) {
      API.get(`/projects/${id}/`).then(res => setProject(res.data))
    }
  }, [id])

  const handleChange = e => {
    setProject({ ...project, name: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const req = id
      ? API.put(`/projects/${id}/`, project)
      : API.post('/projects/', project)
    req.then(() => nav('/projects'))
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="form-group">
        <label>Nombre del Proyecto:</label>
        <input
          name="name"
          value={project.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {id ? 'Guardar' : 'Crear'}
        </button>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => nav('/projects')}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
