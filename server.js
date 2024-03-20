import { Server } from 'socket.io';
import express from 'express';
import { engine } from 'express-handlebars';
import http from 'http';
import fs from 'fs';

import productsRouter from './api/products.js';
import cartsRouter from './api/carts.js';

// Config de Express
const app = express();
const PORT = 8080;

// Config de Handlebars
app.engine('.handlebars', engine());
app.set('view engine', '.handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Función (async) para leer un archivo
const readFileAsync = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    throw error;
  }
};

// Ruta raiz
app.get('/', async (req, res) => {
  try {
    const productos = await readFileAsync('data/products.json');
    res.render('home', { products: productos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para la pagina de productos en tiempo real
app.get('/realtimeproducts', (req, res) => {
  res.render('realtimeproducts');
});

// Middleware para servir archivos estaticos
app.use(express.static('public'));

// Ruta de Socket.io
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(__dirname + '/public/socket.io.js');
});

// Config del servidor HTTP
const server = http.createServer(app);

// Config de Socket.io
const io = new Server(server);

// Manejo de conexiones de Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  // Manejar evento para agregar nuevo producto
  socket.on('addProduct', (newProduct) => {     
    io.emit('updateProducts', getAllProducts());  
  });

  // Manejar evento para eliminar un producto
  socket.on('deleteProduct', (productId) => {   
    io.emit('updateProducts', getAllProducts());
  });
});

// Funcion para obtener todos los productos (solo como ejemplo)
const getAllProducts = () => {
  // aqui implementaremos la logica para obtener todos los productos de la BD, al parecer sera MongoDB
  // Aqui simularemos que obtenemos los productos de alguna BD
  return [
    { id: 1, title: 'Producto 1', description: 'Descripción del producto 1' },
    { id: 2, title: 'Producto 2', description: 'Descripción del producto 2' },
  ];
};

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Inicio del servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { io };    // <- exporta el objeto io para su importacion