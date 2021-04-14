const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roles = require('./RolesModel')



const UsuariosSchema = new Schema({

    nombre: {
        type: String,
    },

    apellido: {
        type: String,
    },

    correo: {
        type: String,
    },

    contrasena: {
        type: String,
    },

    roles: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Role",
        required: true
    },

    Created_date: {
        type: Date,
        default: Date.now
    },


});


module.exports = mongoose.model('Usuario', UsuariosSchema);