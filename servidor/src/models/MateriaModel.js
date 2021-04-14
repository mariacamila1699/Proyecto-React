const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MateriaSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    creditos: {
        type: Number,
        required: 'Creditos'
    },

    usuarios: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
  },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('Materias', MateriaSchema);