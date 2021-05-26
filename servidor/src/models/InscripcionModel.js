const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InscripcionSchema = new Schema({

    fecha_inscripcion: {
      type: String,
      required: 'Fecha Inscripcion'
    },


    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      require: true,

    },


    Created_date: {
        type: Date,
        default: Date.now
      },

    

    
    });
  
  
module.exports = mongoose.model('Inscripciones', InscripcionSchema);