const express = require('express');
const router = express.Router();


const HorarioProfesorService = require('../services/HorarioProfesorService');


router.route('/HorarioProfesor')
      .get(HorarioProfesorService.ListarHorariosProfesores)
      .post(HorarioProfesorService.CrearHorarioProfesor);

router.route('/HorarioProfesor/:id')
      .get(HorarioProfesorService.obtenerHorarioProfesorId)
      .put(HorarioProfesorService.actualizarHorarioProfesor)
      .delete(HorarioProfesorService.eliminarHorarioProfesor);      


     
     
 module.exports = router;