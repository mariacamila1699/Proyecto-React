const HorarioProfesorModel = require('../models/HorarioProfesorModel');


CrearHorarioProfesor = async (req, res) => {

    try {
   
      const horario = new HorarioProfesorModel(req.body);
      await horario.save();
  
      res.status(200).json({
        mensaje:"horario creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear un horario"
      });

    }

  };

  ListarHorariosProfesores = async (req, res) => {
   
    try {
   
        const horario = await HorarioProfesorModel.find();
    
        res.status(200).json({
          horario
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los horarios"
        });
  
      }
};

obtenerHorarioProfesorId = async (req, res) => {

  try {
 
      const horario = await HorarioProfesorModel.findById(req.params.id);
  
      res.status(200).json({
        horario
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener horario"
      });

    }

};

actualizarHorarioProfesor = async (req, res) => {

  try {
 
      await HorarioProfesorModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "horario  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar horario"
      });
  
    }

};

eliminarHorarioProfesor = async (req, res) => {

  try {
 
      await HorarioProfesorModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "horario  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar horario"
      });

    }

};




  module.exports = {CrearHorarioProfesor, ListarHorariosProfesores, obtenerHorarioProfesorId,actualizarHorarioProfesor,eliminarHorarioProfesor}; 