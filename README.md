# Proyecto Mini Core - Aplicación de Gestión de Tareas (React - Django)

Aplicación **CRUD** interconectada de gestión de tareas que combina la robustez de **Django REST Framework** para exponer una API REST, con un frontend **React + Vite** que consume esos endpoints mediante Axios y ofrece una UI en modo oscuro moderna y responsiva. El stack se despliega en **Render**: el backend corre como **Web Service** (Gunicorn + Django, con migraciones automáticas y archivos estáticos recopilados) y el frontend como **Static Site** generado por Vite, con una regla global de rewrite (/* → /index.html) para permitir el enrutado del SPA. 

---

## Descripción del Proyecto

Este proyecto contempla un Mini Core de tareas el cual permite a los usuarios desarrollar las funciones:

- Crear, listar, editar y eliminar **Empleados**, **Proyectos** y **Tareas**.  
- Asociar cada tarea a un empleado y a un proyecto.
- Filtrar tareas por rango de fechas.

El backend se encuentra construido con **Django** y utiliza una base de datos **SQLite** (por defecto) para almacenar la información. El frontend usa **React (Javascript)** con **Vite** y consume la API REST vía **Axios**.

---

## Tabla de Contenidos

1. [Instalación](#instalación)  
2. [Uso del Proyecto](#uso-del-proyecto)  
3. [Características](#características)  
4. [Contribución](#contribución)  
5. [Créditos](#créditos)  
6. [Licencia](#licencia)

---

## Instalación

### Requisitos previos

- **Node.js** y **yarn** (o **npm**) instalados para el frontend (Versión utilizada - **Node: v22.14.0**) (Versión utilizada - **yarn: 1.22.22**).
- **Python 3.8 o superior** instalado para el backend  (Versión utilizada: **3.13.0**).
- **Django**, **Django REST Framework** y **django-cors-headers** instalados en el backend.
- **Axios** en el frontend.

La base de datos SQLite se utiliza por defecto y no requiere de configuraciones adicionales por parte del usuario.

### Pasos para instalar y ejecutar el proyecto

#### Configuración del Backend

1. Clonar el siguiente repositorio:
   ```bash
   git clone https://github.com/Mattair39/Proyecto_MiniCore_MVC.git
   ```
2. Ubicarse en la carpeta principal del proyecto:
   ```bash
   cd ../minicore2
   ```
3. Ir a la carpeta backend:
   ```bash
   cd backend
   ```
4. Crear un entorno virtual e instalar el archivo requirements.txt:
   ```bash
   python -m venv env
   source env/bin/activate
   pip install requirements.txt
   ```
5. Entrar a la carpeta backend (donde se encuentra **manage.py**):
   ```bash
   cd backend
   ```
6. Aplicar las migraciones:
   ```bash
   python manage.py migrate
   ```
7. Iniciar el servidor del backend:
   ```bash
   python manage.py runserver
   ```
El servidor estará disponible en **http://127.0.0.1:8000/**

---
#### Configuración del Frontend

1. Regresar a la carpeta raíz del proyecto y ubícarse en **frontend**:
   ```bash
   cd ../../../frontend
   ```
2. Instalar las dependencias:
   ```bash
   yarn
   ```
---
### Ejecución
#### Iniciar el Backend (Django)

1. Desde la carpeta backend (donde se encuentra manage.py):
   ```bash
   python manage.py runserver
   ```
2. El servidor de Django estará disponible en **http://127.0.0.1:8000/**

#### Iniciar el Frontend (React)

1. Ir a la carpeta frontend y ejecutar:
   ```bash
   yarn dev
   ```
2. La aplicación de React estará disponible en **http://localhost:5173/**

---

## Uso del Proyecto

**1. Agregar Empleados:**

Agregar, editar y eliminar empleados **(nombre y apellido)**.

**2. Agregar Proyectos:**

Agregar, editar y eliminar proyectos **(nombre)**.

**3. Gestionar tareas:**

- Crear tareas asignando empleado, proyecto, descripción, fecha de inicio, tiempo estimado y status.
- Listar y filtrar tareas por rango de fechas.
- Editar o eliminar tareas existentes.

---

## Características

- **CRUD completo para Empleados, Proyectos y Tareas.**
- **Filtros de tareas por fecha de inicio.**
- **API RESTful con endpoints /api/employees/, /api/projects/, /api/tasks/.**
- **CORS habilitado para permitir la comunicación segura entre el frontend y el backend.**
    
---

## Contribución

Para contribuir a este proyecto, se deben seguir estos:

1. Realizar un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/new-feature`).
3. Realiza tus cambios y haz un commit (`git commit -m "Add New Feature"`).
4. Haz un push a la rama (`git push origin feature/new-feature`).
5. Abrir un Pull Request.

---

## Créditos

Este proyecto fue desarrollado por:

- **Gabriel Arguello (Universidad de las Américas)**  
  - [GitHub](https://github.com/Mattair39)  

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://choosealicense.com/licenses/mit/). Puedes usar, modificar y distribuir este proyecto libremente.

--- 
