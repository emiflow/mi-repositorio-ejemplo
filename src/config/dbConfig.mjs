import mongoose from 'mongoose'

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-20:grupo20@cursadanodejs.ls9ii.mongodb.net/Node-js?retryWrites=true&w=majority')
        console.log('Conexion existosa')
    } catch (error) {
        console.log('Error al conectar a mongoDB: ', error)
        process.exit(1)
    }
}