import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api'

export default function TaskForm() {
  const { id } = useParams()
  const nav = useNavigate()

  const [task, setTask] = useState({
    id_employee: '',
    id_project: '',
    description: '',
    date_start: '',
    estimate_time: '',
    status: 'Pending'
  })

  const [employees, setEmployees] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.get('/employees/').then(r => setEmployees(r.data))
    API.get('/projects/').then(r => setProjects(r.data))

    if (id) {
      API.get(`/tasks/${id}/`)
        .then(r => setTask(r.data))
        .catch(console.error)
    }
  }, [id])

  const handleChange = e => {
    const { name, value } = e.target
    setTask(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const call = id
      ? API.put(`/tasks/${id}/`, task)
      : API.post('/tasks/', task)

    call
      .then(() => nav('/tasks'))
      .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="form-group">
        <label>Empleado:</label>
        <select
          name="id_employee"
          value={task.id_employee}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          {employees.map(e =>
            <option key={e.id} value={e.id}>
              {e.first_name} {e.last_name}
            </option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label>Proyecto:</label>
        <select
          name="id_project"
          value={task.id_project}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          {projects.map(p =>
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label>Descripción:</label>
        <input
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Fecha Inicio:</label>
        <input
          type="date"
          name="date_start"
          value={task.date_start}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Tiempo Estimado:</label>
        <input
          type="number"
          name="estimate_time"
          value={task.estimate_time}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Status:</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">No Empezado</option>
          <option value="In Progress">En Progreso</option>
          <option value="Done">Completado</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {id ? 'Guardar' : 'Crear'}
        </button>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => nav('/tasks')}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
