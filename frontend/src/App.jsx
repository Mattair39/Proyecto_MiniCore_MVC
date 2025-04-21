import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout         from './components/Layout'
import Home           from './pages/Home'
import EmployeeList   from './pages/EmployeeList'
import EmployeeForm   from './pages/EmployeeForm'
import ProjectList    from './pages/ProjectList'
import ProjectForm    from './pages/ProjectForm'
import TaskList       from './pages/TaskList'
import TaskForm       from './pages/TaskForm'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/employees"       element={<EmployeeList />} />
          <Route path="/employees/new"   element={<EmployeeForm />} />
          <Route path="/employees/edit/:id" element={<EmployeeForm />} />

          <Route path="/projects"        element={<ProjectList />} />
          <Route path="/projects/new"    element={<ProjectForm />} />
          <Route path="/projects/edit/:id" element={<ProjectForm />} />

          <Route path="/tasks"           element={<TaskList />} />
          <Route path="/tasks/new"       element={<TaskForm />} />
          <Route path="/tasks/edit/:id"  element={<TaskForm />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

