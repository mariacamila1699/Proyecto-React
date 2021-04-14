const express = require('express');
const router = express.Router();


const InscripcionService = require('../services/InscripcionService');


router.route('/Inscripcion')
      .get(InscripcionService.ListarInscripcion)
      .post(InscripcionService.CrearInscripcion);

router.route('/Inscripcion/:id')
      .get(InscripcionService.obtenerInscripcionId)
      .put(InscripcionService.actualizarInscripcion)
      .post(InscripcionService.CrearInscripcion)
      .delete(InscripcionService.eliminarInscripcion);     


     
     
 module.exports = router;