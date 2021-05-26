const InscripcionModel = require('../models/InscripcionModel');


CrearInscripcion = async (req, res) => {

    try {
   
      const inscripcion = new InscripcionModel(req.body);
      await inscripcion.save();

      

      
  
      res.status(200).json({
        mensaje:"inscripcion creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear un inscripcion"
      });

    }

  };

  ListarInscripcion = async (req, res) => {
   
    try {
   
        const inscripcion = await InscripcionModel.find().populate({ path: "user", populate:{ path: "roles"}});
    
        res.status(200).json({
          inscripcion
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todas las inscripciones"
        });
  
      }
};

obtenerInscripcionId = async (req, res) => {

  try {
 
      const inscripcion = await InscripcionModel.findById(req.params.id);
  
      res.status(200).json({
        inscripcion
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al buscar inscripcion por Id"
      });

    }

};

actualizarInscripcion = async (req, res) => {

  try {
 
      await InscripcionModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "inscripcion  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar inscripcion"
      });
  
    }

};

eliminarInscripcion = async (req, res) => {

  try {
 
      await InscripcionModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "inscripcion  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar inscripcion"
      });

    }

};




  module.exports = { CrearInscripcion, ListarInscripcion, obtenerInscripcionId,actualizarInscripcion, eliminarInscripcion}; 