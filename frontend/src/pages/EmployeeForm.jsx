import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api'

export default function EmployeeForm() {
  const { id } = useParams()
  const nav = useNavigate()
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: ''
  })

  useEffect(() => {
    if (id) {
      API.get(`/employees/${id}/`).then(res => {
        setEmployee(res.data)
      })
    }
  }, [id])

  const handleChange = e => {
    const { name, value } = e.target
    setEmployee(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const req = id
      ? API.put(`/employees/${id}/`, employee)
      : API.post('/employees/', employee)

    req.then(() => nav('/employees'))
       .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="form-group">
        <label>Nombre:</label>
        <input
          name="first_name"
          value={employee.first_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Apellido:</label>
        <input
          name="last_name"
          value={employee.last_name}
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
          onClick={() => nav('/employees')}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
