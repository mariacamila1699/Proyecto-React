const GrupoModel = require('../models/GrupoModel');


CrearGrupo = async (req, res) => {

    try {
   
      const grupo = new GrupoModel(req.body);
      await grupo.save();
  
      res.status(200).json({
        mensaje:"grupo creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear grupo"
      });

    }

  };

  ListarGrupo = async (req, res) => {
   
    try {
   
        const grupo = await GrupoModel.find();
    
        res.status(200).json({
          grupo
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los grupos"
        });
  
      }
};

obtenerGrupoId = async (req, res) => {

  try {
 
      const grupo = await GrupoModel.findById(req.params.id);
  
      res.status(200).json({
        grupo
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al buscar grupo por Id"
      });

    }

};

actualizarGrupo = async (req, res) => {

  try {
 
      await GrupoModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "grupo  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar grupo"
      });
  
    }

};

eliminarGrupo = async (req, res) => {

  try {
 
      await GrupoModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "grupo  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar grupo"
      });

    }

};




  module.exports = { CrearGrupo, ListarGrupo, obtenerGrupoId,actualizarGrupo, eliminarGrupo}; 