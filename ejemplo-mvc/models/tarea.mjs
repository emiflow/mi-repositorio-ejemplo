export default class Tarea {
  constructor(id, titulo, descripcion, completado = false) {
      this.id = id; //identificador de la tarea
      this.titulo = titulo; //título de la tarea
      this.descripcion = descripcion; //descripción de la tarea
      this.completado = completado; //estado de completado por defecto es false
  }

 // método para marcar una tarea como completada 
  completar() {
      this.completado = true; //cambia el estado completado a true
  }

    // Método para validar que el título de la tarea no esté vacío
    validar() {
      if (!this.titulo || this.titulo.trim() === '') {
        throw new Error('El título de la tarea es obligatorio.');
      }
}
}
