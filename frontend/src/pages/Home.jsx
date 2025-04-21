import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()
  const [dates, setDates] = useState({ date_start: '', date_end: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setDates(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const qs = `?date_start=${dates.date_start}&date_end=${dates.date_end}`
    nav(`/tasks${qs}`)
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="form-group">
        <label>Fecha Inicio:</label>
        <input
          type="date"
          name="date_start"
          value={dates.date_start}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha Fin:</label>
        <input
          type="date"
          name="date_end"
          value={dates.date_end}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Buscar Tareas
        </button>
      </div>
    </form>
  )
}
