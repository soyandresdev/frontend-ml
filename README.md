# Test Frontend para ML

Cree dos carpetas una para el backend (server) y otra para el frontend (frontend), para trabajar con mayor comodidad y mejor escalibilidad para el futuro.

La prueba consistia en desarrollar una applicacion web con tres componentes principales: Un header con un formulario de busqueda, una pagina donde listar productos dependiendo del valor que ahi en el buscardo del header, y una pagina del detalle del producto.

Se creo tambien un aplicacion para el backend en la cual la aplicación busca productos mediante la API de ML de argentina.

## Tecnologías

JavaScript ES6 (async/await, arrow function, spread operator, etc..)

Frontend: React, React Hooks, Sass, Axios
Backend: Node.js, Express, Axios, Cors

## Como correr las aplicaciones

### Herramientas necesarias

Para construir este proyecto necesita un entorno con:

- [NodeJS](https://nodejs.org/)
- Yarn `npm i -g yarn`

### Servidor

```bash
cd backend
yarn install
yarn start
```

Por defecto, el backend esta corriendo en `http://localhost:3333/`

### Cliente

```bash
cd frontend
yarn install
yarn start
```

Por defecto, la aplicación frontend corre en`http://localhost:3000/`
