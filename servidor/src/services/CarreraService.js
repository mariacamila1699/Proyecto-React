const CarreraModel = require('../models/CarreraModel');


CrearCarrera = async (req, res) => {

    try {
   
      const carrera = new CarreraModel(req.body);
      await carrera.save();
  
      res.status(200).json({
        mensaje:"carrera  creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear una carrera"
      });

    }

  };

  ListarCarreras = async (req, res) => {
   
    try {
   
        const carrera = await CarreraModel.find();
    
        res.status(200).json({
          carrera
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todas las carreras"
        });
  
      }
};

obtenerCarreraId = async (req, res) => {

  try {
 
      const carrera = await CarreraModel.findById(req.params.id);
  
      res.status(200).json({
        carrera
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener carrera"
      });

    }

};

actualizarCarrera = async (req, res) => {

  try {
 
      await CarreraModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "carrera  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar carrera"
      });
  
    }

};

eliminarCarrera = async (req, res) => {

  try {
 
      await CarreraModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "carrera   eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar carrera"
      });

    }

};




  module.exports = { CrearCarrera, ListarCarreras, obtenerCarreraId,actualizarCarrera,eliminarCarrera}; 