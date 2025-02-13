# HeroesApp

HeroesApp es una aplicación de una sola página (SPA) desarrollada con React que permite a los usuarios explorar y buscar información sobre diversos héroes. La aplicación utiliza React Router para la navegación y maneja el estado con Context y Reducer.

## Características

- **Navegación con React Router**: Implementación de rutas para una navegación fluida entre diferentes vistas.
- **Componentes Reutilizables**: Diseño modular con componentes reutilizables para tarjetas de héroes, pantallas de detalles, y más.
- **Animaciones**: Integración de animaciones para mejorar la experiencia del usuario.
- **Búsqueda de Héroes**: Funcionalidad de búsqueda para encontrar héroes rápidamente.
- **Autenticación**: Sistema de login y logout con protección de rutas para acceder a contenido privado.
- **Estado Global**: Uso de Context y Reducer para manejar el estado global de la aplicación.

## Instalación

Para ejecutar esta aplicación en tu entorno local, sigue estos pasos:

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/heroes-app.git
   cd heroes-app
   ```

2. **Instalar Dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar la Aplicación**:
   ```bash
   npm start
   ```

## Uso

### Inicio de Proyecto

- **Iniciar**: Introducción al proyecto y configuración inicial.

### Navegación

- **Creando un primer Router**: Configuración básica de React Router.
- **Colocar clase de la ruta activa**: Estilos para la ruta activa.
- **Creando un segundo Router**: Manejo de múltiples rutas.
- **Navigate push / replace - useNavigate**: Navegación programática.

### Componentes

- **Lista de Heroes**: Componente para listar héroes.
- **Tarjetas con la información del Héroe**: Diseño de tarjetas de héroes.
- **Tarjeta del Héroe - parte 2**: Mejoras en el diseño de tarjetas.
- **Leer argumentos por URL**: Manejo de parámetros de URL.
- **Estilo del componente HeroScreen**: Estilos para la pantalla de detalles del héroe.

### Optimización y Animaciones

- **Nota: useMemo**: Uso de `useMemo` para optimizar el rendimiento.
- **Animaciones en nuestro componente**: Integración de animaciones.

### Búsqueda

- **Diseño de la pantalla de búsqueda**: Interfaz de búsqueda.
- **SearchComponent**: Componente de búsqueda.
- **Mostrar listado de héroes**: Resultados de búsqueda.
- **Mostrar mensajes condicionales**: Mensajes basados en el estado de la búsqueda.

### Autenticación

- **Context y Reducer de mi aplicación**: Manejo del estado global.
- **Login de un usuario**: Funcionalidad de login.
- **Mantener el usuario activo**: Persistencia de la sesión del usuario.
- **Logout del usuario**: Funcionalidad de logout.
- **Rutas privadas**: Protección de rutas privadas.
- **Rutas públicas**: Acceso a rutas públicas.
- **Recordar la última página visitada**: Navegación mejorada.