import TareaRepository from '../repository/TareaRepository.mjs'; //importa la capa de persistencia
import Tarea from '../models/tarea.mjs'; //importa el modelo de tarea

//Instancia el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

//servicio para obtener todas las
export function listarTareas() { //obtiene todas las tareas desde la capa de persistencia
  try {
    return tareaRepo.obtenerTodas();
  } catch (error) {
    throw new Error('Error al listar las tareas: ' + error.message);
  }
}

//servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
  try {
    const tareas = tareaRepo.obtenerTodas();
    return tareas.filter((tarea) => tarea.completado);
  } catch (error) {
    throw new Error('Error al listar tareas completadas: ' + error.message);
  }
}

//servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false) {
  
    const tareas = tareaRepo.obtenerTodas();
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    nuevaTarea.validar();
    tareas.push(nuevaTarea);
    tareaRepo.guardar(tareas);
 
}


//servicio para crear marcar una tarea como completada
export function completarTarea(id) {
  try {
    const tareas = tareaRepo.obtenerTodas();
    const tarea = tareas.find((tarea) => tarea.id === id);

    if (!tarea) {
      throw new Error(`No se encontró ninguna tarea con el ID: ${id}`);
    }

    tarea.completar();
    tareaRepo.guardar(tareas);
  } catch (error) {
    throw new Error('Error al completar la tarea: ' + error.message);
  }
}

//servicio para eliminar una tarea
export function eliminarTarea(id) {
  try {
    let tareas = tareaRepo.obtenerTodas();
    tareas = tareas.filter((tarea) => tarea.id === id);
    tareaRepo.guardar(tareas);
   
  } catch (error) {
    throw new Error('Error al eliminar la tarea: ' + error.message);
  }
}
