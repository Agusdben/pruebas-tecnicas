# Aplicación de Lista de Libros con Next.js v13

Este proyecto es parte de una prueba técnica, extraída de [pruebastecnicas](https://www.pruebastecnicas.com/), para diseñar y desarrollar una aplicación web de lista de libros utilizando Next.js en su versión 13. El objetivo es demostrar mis habilidades en interacciones con el usuario, gestión de estado, filtrado de datos y la estructuración del código.

## Descripción del Proyecto

Esta aplicación permite a los usuarios explorar un catálogo de libros y crear una lista de lectura personalizada. Los usuarios pueden ver los libros disponibles, filtrar por género, agregar libros a su lista de lectura y mantenerla sincronizada en diferentes pestañas y sesiones.

## Requisitos Funcionales que voy abordar

1. **Visualización de Libros Disponibles**: Los usuarios pueden ver una lista de libros disponibles con detalles como título, autor y género.

2. **Creación de Lista de Lectura**: Los usuarios pueden agregar libros a su lista de lectura. Los libros en la lista de lectura están claramente identificados.

3. **Filtrado de Libros por Género**: Los usuarios pueden filtrar los libros disponibles por género y ver el contador de libros en cada categoría.

4. **Sincronización de Estado**: La aplicación mantiene sincronizado el estado de los libros en la lista de lectura y disponibles.

5. **Persistencia de Datos**: La lista de lectura se guarda localmente en el navegador y se recupera al recargar la página.

6. **Sincronización entre Pestañas**: Los cambios realizados en una pestaña se reflejan automáticamente en otras pestañas.

7. **Despliegue**: La aplicación está desplegada en [Netlify](https://www.netlify.com/) y es accesible [aquí](https://tu-url-deploy.netlify.app/). `próximamente`

8. **Pruebas**: La aplicación incluye pruebas automatizadas para al menos un componente importante.

## Instalación y Uso

1. Clona este repositorio.
2. Instala las dependencias usando `npm install`.
3. Ejecuta la aplicación con `npm run dev`.
4. Abre tu navegador y visita `http://localhost:3000`.

## Estructura del Proyecto

- `components/`: Contiene los componentes reutilizables de la aplicación.
- `app/`: Contiene las páginas de Next.js que representan diferentes rutas.
- `public/`: Contiene archivos estáticos como imágenes.


## Tecnologías Utilizadas

- Next.js v13
- React
- Tailwindcss
