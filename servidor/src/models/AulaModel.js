const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AulaSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    bloque: {
        type: String,
        required: 'Bloque'
    },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('Aulas', AulaSchema);