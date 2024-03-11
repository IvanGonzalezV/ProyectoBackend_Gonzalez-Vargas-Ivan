# Gestor de Carritos de Compras

Este proyecto consiste en una API backend desarrollada en Node.js utilizando Express.js para gestionar carritos de compras. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los carritos y sus productos asociados.

## Cambios Realizados

### Actualización del archivo package.json

Se ha agregado la propiedad **"type": "module"** al archivo **package.json** para indicar a Node.js que debe interpretar el código como módulos ES6.

### Integración de FileSystem (fs)

Se ha integrado el módulo **fs** de Node.js en las clases **CartManager** y **ProductManager** para manejar la persistencia de datos. Se ha agregado lógica para cargar, guardar y actualizar los carritos y productos en archivos JSON.

### Corrección de errores

Se han corregido varios errores relacionados con la carga y guardado de carritos y productos, así como también con la creación de los archivos correspondientes.

## Uso

La API proporciona las siguientes rutas para interactuar con los carritos y los productos:

### Carritos

- **POST** `/api/carts`: Crea un nuevo carrito.
- **GET** `/api/carts/:cid`: Obtiene los productos de un carrito específico.
- **POST** `/api/carts/:cid/product/:pid`: Agrega un producto a un carrito existente.
- **PUT** `/api/carts/:cid`: Actualiza los datos de un carrito existente.
- **DELETE** `/api/carts/:cid`: Elimina un carrito existente.

### Productos

- **POST** `/api/products`: Crea un nuevo producto.
- **GET** `/api/products`: Obtiene todos los productos.
- **GET** `/api/products/:pid`: Obtiene un producto específico.
- **PUT** `/api/products/:pid`: Actualiza los datos de un producto existente.
- **DELETE** `/api/products/:pid`: Elimina un producto existente.

## Pruebas en Postman

Se realizaron pruebas en Postman para verificar el funcionamiento de la API. Las pruebas incluyeron:

- Creación de un nuevo carrito.
- Agregado de productos a un carrito existente.
- Actualización de datos de un carrito.
- Eliminación de un carrito existente.
- Creación de un nuevo producto.
- Obtención de todos los productos.
- Obtención de un producto específico.
- Actualización de datos de un producto.
- Eliminación de un producto existente.

## Repositorio

El código fuente de este proyecto está disponible en el siguiente repositorio:

[ProyectoBackend_Gonzalez-Vargas-Ivan](https://github.com/IvanGonzalezV/ProyectoBackend_Gonzalez-Vargas-Ivan)

## Colaboraciones

Este proyecto está abierto a colaboraciones de la comunidad. Se agradecerán todas las ideas y sugerencias con el objetivo de mejorar el código y la funcionalidad de la API. ¡Tu contribución es bienvenida y valorada!
