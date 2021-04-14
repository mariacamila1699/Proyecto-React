const AulaModel = require('../models/AulaModel');


CrearAula = async (req, res) => {

    try {
   
      const aula = new AulaModel(req.body);
      await aula.save();
  
      res.status(200).json({
        mensaje:"aula creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear aula"
      });

    }

  };

  ListarAula = async (req, res) => {
   
    try {
   
        const aula = await AulaModel.find();
    
        res.status(200).json({
          aula
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos las aulas"
        });
  
      }
};

obtenerAulaId = async (req, res) => {

  try {
 
      const aula = await AulaModel.findById(req.params.id);
  
      res.status(200).json({
        aula
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al buscar aula  por Id"
      });

    }

};

actualizarAula = async (req, res) => {

  try {
 
      await AulaModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "aula  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar aula"
      });
  
    }

};

eliminarAula = async (req, res) => {

  try {
 
      await AulaModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "aula  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar aula"
      });

    }

};




  module.exports = { CrearAula, ListarAula, obtenerAulaId, actualizarAula, eliminarAula}; 