const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioProfesorSchema = new Schema({

    dia: {
      type: String,
      required: 'Dia'
    },
    hora_inicio: {
        type: String,
        required: 'Hora_Inicio'
    },
    hora_final: {
        type: String,
        required: 'Hora_Final'
    },

    

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('HorariosProfesores', HorarioProfesorSchema);