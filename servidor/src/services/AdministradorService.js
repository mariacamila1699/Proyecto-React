const AdministradorModel = require('../models/AdministradorModel');


CrearAdministrador = async (req, res) => {

    try {
   
      const Administrador = new AdministradorModel(req.body);
      await Administrador.save();
  
      res.status(200).json({
        mensaje:"administrador creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear administrador"
      });

    }

  };

  ListarAdministrador = async (req, res) => {
   
    try {
   
        const administrador = await AdministradorModel.find();
    
        res.status(200).json({
          administrador
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar administrador"
        });
  
      }
};

obtenerAdministradorId = async (req, res) => {

  try {
 
      const administrador = await AdministradorModel.findById(req.params.id);
  
      res.status(200).json({
        administrador
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al buscar administrador por Id"
      });

    }

};

actualizarAdministrador = async (req, res) => {

  try {
 
      await AdministradorModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "administrador  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar administrador"
      });
  
    }

};

eliminarAdministrador = async (req, res) => {

  try {
 
      await AdministradorModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "administrador  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar administrador"
      });

    }

};




  module.exports = { CrearAdministrador, ListarAdministrador, obtenerAdministradorId,actualizarAdministrador,eliminarAdministrador}; 