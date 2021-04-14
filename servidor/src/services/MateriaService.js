const MateriaModel = require('../models/MateriaModel');


CrearMateria = async (req, res) => {

    try {
   
      const materia = new MateriaModel(req.body);
      await materia.save();
  
      res.status(200).json({
        mensaje:"materia creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear materia"
      });

    }

  };

  ListarMaterias = async (req, res) => {
   
    try {
   
        const materia = await MateriaModel.find().populate({ path: "usuarios", populate:{ path: "roles"}});
    
        res.status(200).json({
          materia
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todas las materias"
        });
  
      }
};

obtenerMateriaId = async (req, res) => {

  try {
 
      const materia = await MateriaModel.findById(req.params.id);
  
      res.status(200).json({
        materia
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener materia"
      });

    }

};

actualizarMateria = async (req, res) => {

  try {
 
      await MateriaModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "Materia  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar Materia"
      });
  
    }

};

eliminarMateria = async (req, res) => {

  try {
 
      await MateriaModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "materia  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar materia"
      });

    }

};




  module.exports = { CrearMateria, ListarMaterias, obtenerMateriaId,actualizarMateria,eliminarMateria}; 