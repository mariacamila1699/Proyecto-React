const express = require('express');
const router = express.Router();


const AdministradorService = require('../services/AdministradorService');


router.route('/Administrador')
      .get(AdministradorService.ListarAdministrador)
      .post(AdministradorService.CrearAdministrador);

router.route('/Administrador/:id')
      .get(AdministradorService.obtenerAdministradorId)
      .put(AdministradorService.actualizarAdministrador)
      .delete(AdministradorService.eliminarAdministrador);      


     
     
 module.exports = router;