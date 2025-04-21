import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import API from '../api'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [search] = useSearchParams()
  const start = search.get('date_start')
  const end = search.get('date_end')

  useEffect(() => {
    let url = '/tasks/'
    if (start && end) url += `?date_start=${start}&date_end=${end}`
    API.get(url).then(r => setTasks(r.data))
  }, [start, end])

  const handleDelete = id => {
    API.delete(`/tasks/${id}/`).then(() => {
      setTasks(tasks.filter(t => t.id !== id))
    })
  }

  const formatDate = iso =>
    new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })

  const badgeClass = status => {
    if (status === 'Pending') return 'badge badge-danger'
    if (status === 'In Progress') return 'badge badge-warning'
    if (status === 'Done') return 'badge badge-success'
    return 'badge badge-secondary'
  }

  return (
    <div>
      <button
        className="btn-primary"
        onClick={() => window.location.href = '/tasks/new'}
      >
        Agregar una Nueva Tarea
      </button>

      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Empleado Encargado</th>
            <th>Proyecto Relacionado</th>
            <th>Descripción del Proyecto</th>
            <th>Fecha de Inicio</th>
            <th>Tiempo Estimado en Horas</th>
            <th>Status</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td>{t.employee}</td>
              <td>{t.project}</td>
              <td>{t.description}</td>
              <td>{formatDate(t.date_start)}</td>
              <td>{t.estimate_time}</td>
              <td>
                <span className={badgeClass(t.status)}>
                  {t.status === 'Pending'
                    ? 'No empezado'
                    : t.status === 'In Progress'
                    ? 'En progreso'
                    : 'Completado'}
                </span>
              </td>
              <td>
                <Link to={`/tasks/edit/${t.id}`} className="icon-btn">✏️</Link>
              </td>
              <td>
                <button
                  className="icon-btn"
                  onClick={() => handleDelete(t.id)}
                >🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
