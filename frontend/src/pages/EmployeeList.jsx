import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../api'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    API.get('/employees/').then(r => setEmployees(r.data))
  }, [])

  const handleDelete = id => {
    API.delete(`/employees/${id}/`).then(() => {
      setEmployees(employees.filter(e => e.id !== id))
    })
  }

  return (
    <div>
      <button
        className="btn-primary"
        onClick={() => window.location.href = '/employees/new'}
      >
        Agregar Empleado
      </button>

      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>
                <Link to={`/employees/edit/${e.id}`} className="icon-btn">✏️</Link>
              </td>
              <td>
                <button
                  className="icon-btn"
                  onClick={() => handleDelete(e.id)}
                >🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
