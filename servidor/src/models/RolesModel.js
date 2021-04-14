const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const RolesSchema = new Schema({

    tipo: {
      type: String,
    },
    
    Created_date: {
      type: Date,
      default: Date.now
    },

    
  });


  module.exports = mongoose.model('Role', RolesSchema);