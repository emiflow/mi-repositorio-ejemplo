const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-20:grupo20@cursadanodejs.ls9ii.mongodb.net/Node-js?retryWrites=true&w=majority')
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));



    
    const superheroSchema = new mongoose.Schema({
        nombreSuperHeroe: { type: String, required: true },
        nombreReal: { type: String, required: true },
        edad: { type: Number, min: 0 },
        planetaOrigen: { type: String, default: 'Desconocido' },
        debilidad: { type: String },
        poderes: [String],
        aliados: [String],
        enemigos: [String],
        createdAt: { type: Date, default: Date.now }
    }, { collection: 'Grupo-20' });
    
    const SuperHero = mongoose.model('Grupo-20', superheroSchema);

    async function insertSuperHero() {
        const hero = new SuperHero({
            nombreSuperHeroe: 'Spiderman',
            nombreReal: 'Peter Parker',
            edad: 25,
            planetaOrigen: 'Tierra',
            debilidad: 'Radioactividad',
            poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
            aliados: ['Iron Man'],
            enemigos: ['Duende Verde']
        });
        await hero.save();
        console.log('Superhéroe insertado:', hero);
    }
    
    insertSuperHero();

    async function updateSuperHero(nombreSuperHeroe) {
            const result = await SuperHero.updateOne(
                { nombreSuperHeroe: nombreSuperHeroe },
                { $set: { edad: 26 } }
            );
            console.log('Resultado de la actualización:', result);
    }

    updateSuperHero('Spiderman');




    async function deleteSuperHero(nombreSuperHeroe) {
            const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
            console.log('Superhéroe eliminado:', result);
    }
    
    deleteSuperHero('Spiderman');

    async function findSuperHeroes(planetaOrigen) {
            const heroes = await SuperHero.find({ planetaOrigen: planetaOrigen });
            console.log('Superhéroes encontrados:', heroes); 
    }
    
    findSuperHeroes('Tierra');
    
    
    
    
    