const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InscripcionSchema = new Schema({

    fecha_inscripcion: {
      type: String,
      required: 'Fecha Inscripcion'
    },
    Created_date: {
        type: Date,
        default: Date.now
      },

    estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'Estudiantes'
    }

    
    });
  
  
module.exports = mongoose.model('Inscripciones', InscripcionSchema);