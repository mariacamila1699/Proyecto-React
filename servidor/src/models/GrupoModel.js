const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrupoSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    capacidad: {
        type: String,
        required: 'Capacidad'
    },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('Grupos', GrupoSchema);