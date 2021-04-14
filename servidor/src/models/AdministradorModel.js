const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdministradorSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    apellido: {
        type: String,
        required: 'Apellido'
    },

    identificacion: {
        type: Number,
        required: 'Identificacion'
    },
    telefono: {
      type: Number,
      required: 'Telefono'
    },
    direccion: {
      type: String,
      required: 'Direccion'
    },
    sexo: {
      type: String,
      required: 'Sexo'
    },
    correo: {
        type: String,
        required: 'Correo'
    },
      usuario: {
        type: String,
        required: 'usuario'
    },
      contraseña: {
        type: String,
        required: 'Contraseña'
    },
      
    Created_date: {
      type: Date,
      default: Date.now
    },
  
  });


  module.exports = mongoose.model('Administrador', AdministradorSchema);