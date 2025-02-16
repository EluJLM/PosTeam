# Sistema de Gestión de Clientes y Productos

Este proyecto es un sistema de gestión de clientes y productos desarrollado con **React**, **Vite**, **Zustand** y **Supabase**. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para clientes, productos, categorías y tipos de documento, utilizando una base de datos en tiempo real proporcionada por Supabase.

## Características principales

- **Gestión de Clientes**:
  - Crear, leer, actualizar y eliminar clientes.
  - Asociar clientes a un tipo de documento.
  - Campos: Nombre, Teléfono, Correo, Dirección, Tipo de Documento, Número de Documento.

- **Gestión de Productos**:
  - Crear, leer, actualizar y eliminar productos.
  - Asociar productos a una categoría.
  - Campos: Nombre, Código de Barras, Precio, Costo, Stock, Categoría, Estado.

- **Gestión de Categorías**:
  - Crear, leer, actualizar y eliminar categorías.
  - Campos: Nombre.

- **Gestión de Tipos de Documento**:
  - Leer tipos de documento (solo lectura).
  - Campos: Nombre.

- **Integración con Supabase**:
  - Uso de Supabase como backend para almacenar y gestionar datos en tiempo real.
  - Autenticación y políticas de seguridad configuradas.

- **Estado Global con Zustand**:
  - Uso de Zustand para manejar el estado global de la aplicación.
  - Stores separados para clientes, productos, categorías y tipos de documento.

## Tecnologías utilizadas

- **Frontend**:
  - React
  - Vite
  - Zustand (gestión del estado)
  - Supabase (backend y base de datos)

- **Backend**:
  - Supabase (PostgreSQL y API REST)

- **Otras herramientas**:
  - HTML5, CSS3, JavaScript (ES6+)

## Configuración del proyecto

### Requisitos previos

- Node.js (v16 o superior)
- npm o yarn
- Cuenta en [Supabase](https://supabase.io/)

### Pasos para configurar el proyecto

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/EluJLM/PosTeam.git
   cd PosTeam