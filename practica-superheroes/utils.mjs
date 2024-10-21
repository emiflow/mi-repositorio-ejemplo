import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe; // Asignación correcta
        this.nombreReal = nombreReal; // Asignación correcta
        this.nombreSociedad = nombreSociedad; // Asignación correcta
        this.edad = edad; // Asignación correcta
        this.planetaOrigen = planetaOrigen; // Asignación correcta
        this.debilidad = debilidad; // Asignación correcta
        this.poder = poder; // Asignación correcta
        this.habilidadEspecial = habilidadEspecial; // Asignación correcta
        this.aliado = aliado; // Asignación correcta
        this.enemigo = enemigo; // Asignación correcta
    }
}

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);
    
    // Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(hero => new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial, // Corrigió el nombre de la propiedad
        hero.aliado,
        hero.enemigo
    ));
    
    // Ordenar por nombre de superhéroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    
    return superheroes;
}


export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    // Leer los archivos de superhéroes
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    // Convertir el contenido a JSON
    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superhéroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(
            hero.id, 
            hero.nombreSuperheroe, 
            hero.nombreReal, 
            hero.nombreSociedad, 
            hero.edad, 
            hero.planetaOrigen, 
            hero.debilidad, 
            hero.poder, 
            hero.habilidadEspecial,  // Aquí el nombre corregido
            hero.aliado, 
            hero.enemigo
        )
    );

    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    // Guardar la lista actualizada en el archivo original
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');

    // Confirmación en consola
    console.log('Lista de superhéroes actualizada con éxito.');
}
