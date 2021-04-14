const express = require('express');
const router = express.Router();


const CarreraService = require('../services/CarreraService');


router.route('/Carrera')
      .get(CarreraService.ListarCarreras)
      .post(CarreraService.CrearCarrera);

router.route('/Carrera/:id')
      .get(CarreraService.obtenerCarreraId)
      .put(CarreraService.actualizarCarrera)
      .delete(CarreraService.eliminarCarrera);      


     
     
 module.exports = router;