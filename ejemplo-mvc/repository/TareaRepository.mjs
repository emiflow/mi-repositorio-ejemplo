import fs from 'fs'; //importa modulo del sistema de archivos de node.js
import path from 'path'; //modulo para manejar rutas de archivo
import { fileURLToPath } from 'url'; //modulo para obtener ruta del archivo actual
import Tarea from '../models/tarea.mjs';  //importa el modelo tarea
import TareasDataSource from './TareasDataSource.mjs';

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const filePath = path.join(dirname, '../tareas.txt');

// Implementación concreta que extiende la interfaz TareasDataSource
export default class TareaRepository extends TareasDataSource {
  constructor() {
      super(); //llamada al constructor de la clase base
  }

  //Implementacion del metodo obtenerTodas()
  obtenerTodas() {
    try {
      //leer el archivo de texto en formato utf-8
      const data = fs.readFileSync(filePath, 'utf-8');
      //convertir el contenido del archivo en un array de objetos JSON
      const tareas = JSON.parse(data);
      //convertir cada tarea en una instancia de la clase Tarea
      return tareas.map(
        (tareaData) =>
          new Tarea(tareaData.id, tareaData.titulo, tareaData.descripcion, tareaData.completado)
      );
    } catch (error) {  //si ocurre un error, como que no hay archivo, devuelve array vacío
      console.error('Error al leer el archivo de tareas:', error);
      return [];
    }
  }

    //Implementacion del metodo guardar()
  guardar(tareas) {
    try {
      //convertir el array tareas en cadena json con indentación de dos espacios
      const data = JSON.stringify(tareas, null, 2);
      //escribir el contenido en el archivo de texto
      fs.writeFileSync(filePath, data, 'utf-8');
    } catch (error) { //si ocurre error al guardar datos, se muestra el error
      console.error('Error al guardar las tareas:', error);
    }
  }

  
    //Implementacion del metodo eliminar()
  eliminar(id) {
    try {
      const tareas = this.obtenerTodas(); //obtener todas las tareas existentes
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id); //filtrar por ID
      this.guardar(tareasActualizadas); //guardar la lista actualizada
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  }
}
