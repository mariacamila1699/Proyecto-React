const RolModel = require('../models/RolesModel');


CrearRol = async (req, res) => {

    try {
   
      const Rol = new RolModel(req.body);
      await Rol.save();
  
      res.status(200).json({
        mensaje:"Rol creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear un Rol"
      });

    }

  };

  ListarRols = async (req, res) => {
   
    try {
   
        const Rol = await RolModel.find();
    
        res.status(200).json({
          Rol
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los Rols"
        });
  
      }
};

obtenerRolId = async (req, res) => {

  try {
 
      const Rol = await RolModel.findById(req.params.id);
  
      res.status(200).json({
        Rol
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener Rol"
      });

    }

};

actualizarRol = async (req, res) => {

  try {
 
      await RolModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "Rol  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar Rol"
      });
  
    }

};

eliminarRol = async (req, res) => {

  try {
 
      await RolModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "Rol  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar Rol"
      });

    }

};




  module.exports = { CrearRol, ListarRols, obtenerRolId,actualizarRol,eliminarRol}; 