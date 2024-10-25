import express from 'express'; // Importamos el framework Express  
// Importamos los controladores  
import { listarTareasController,  
listarTareasCompletadasController,  
crearTareaController,  
completarTareaController,  
eliminarTareaController } from './controllers/tareaController.mjs';  

const app = express(); // Inicializamos una aplicación de Express  
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor  

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON  
app.use(express.json());  

/*
// Ruta para la raíz que evitará el error "No se puede obtener /" 
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de tareas');
});*/

// Rutas  
// Ruta para obtener todas las tareas  
app.get('/tareas', listarTareasController);  
// Ruta para obtener las tareas completadas  
app.get('/tareas/completadas', listarTareasCompletadasController);  
// Ruta para crear una nueva tarea  
app.post('/tareas', crearTareaController);  
// Ruta para marcar una tarea como completada  
app.put('/tareas/:id/completar', completarTareaController);  
// Ruta para eliminar una tarea  
app.delete('/tareas/:id', eliminarTareaController);  

// Iniciar el servidor  
app.listen(PORT, () => {  
  console.log(`Servidor corriendo en http://localhost:${PORT}`);  
});
