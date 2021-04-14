const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioEstudianteSchema = new Schema({

    dia: {
      type: String,
      required: 'Dia'
    },
    horainicio: {
        type: Number,
        required: 'HoraInicio'
    },
    horaFinal: {
        type: Number,
        required: 'HoraFinal'
    },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('HorariosEstudiantes', HorarioEstudianteSchema);