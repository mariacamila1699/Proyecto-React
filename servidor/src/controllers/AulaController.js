const express = require('express');
const router = express.Router();


const AulaService = require('../services/AulaService');


router.route('/Aula')
      .get(AulaService.ListarAula)
      .post(AulaService.CrearAula);

router.route('/Aula/:id')
      .get(AulaService.obtenerAulaId)
      .put(AulaService.actualizarAula)
      .delete(AulaService.eliminarAula);      


     
     
 module.exports = router;