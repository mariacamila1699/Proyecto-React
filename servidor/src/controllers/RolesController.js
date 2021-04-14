const express = require('express');
const router = express.Router();


const RolesService = require('../services/RolesService');


router.route('/Roles')
      .get(RolesService.ListarRols)
      .post(RolesService.CrearRol);

router.route('/Roles/:id')
      .get(RolesService.obtenerRolId)
      .put(RolesService.actualizarRol)
      .delete(RolesService.eliminarRol);      


     
     
 module.exports = router;