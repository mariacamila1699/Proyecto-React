const HorarioEstudianteModel = require('../models/HorarioEstudianteModel');


CrearHorario = async (req, res) => {

    try {
   
      const horario = new HorarioEstudianteModel(req.body);
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

  ListarHorariosEstudiantes = async (req, res) => {
   
    try {
   
        const horario = await HorarioEstudianteModel.find();
    
        res.status(200).json({
          horario
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los horarios"
        });
  
      }
};

obtenerHorarioEstudianteId = async (req, res) => {

  try {
 
      const horario = await HorarioEstudianteModel.findById(req.params.id);
  
      res.status(200).json({
        horario
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener horario"
      });

    }

};

actualizarHorarioEstudiante = async (req, res) => {

  try {
 
      await HorarioEstudianteModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
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

eliminarHorarioEstudiante = async (req, res) => {

  try {
 
      await HorarioEstudianteModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "horario  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar horario"
      });

    }

};




  module.exports = {CrearHorario, ListarHorariosEstudiantes, obtenerHorarioEstudianteId,actualizarHorarioEstudiante,eliminarHorarioEstudiante}; 