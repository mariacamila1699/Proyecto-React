const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarreraSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    semestre: {
        type: Number,
        required: 'Semestre'
    },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('Carreras', CarreraSchema);