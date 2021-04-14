const express = require('express');
const router = express.Router();


const HorarioEstudianteService = require('../services/HorarioEstudianteService');


router.route('/HorarioEstudiante')
      .get(HorarioEstudianteService.ListarHorariosEstudiantes)
      .post(HorarioEstudianteService.CrearHorario);

router.route('/HorarioEstudiante/:id')
      .get(HorarioEstudianteService.obtenerHorarioEstudianteId)
      .put(HorarioEstudianteService.actualizarHorarioEstudiante)
      .delete(HorarioEstudianteService.eliminarHorarioEstudiante);      


     
     
 module.exports = router;