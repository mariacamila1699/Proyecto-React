const express = require('express');
const router = express.Router();


const UsuarioService = require('../services/UsuariosService');


router.route('/Usuario')
      .get(UsuarioService.ListarUsuarios)
      .post(UsuarioService.CrearUsuario);

router.route('/Usuario/:id')
      .get(UsuarioService.obtenerUsuarioId)
      .put(UsuarioService.actualizarUsuario)
      .delete(UsuarioService.eliminarUsuario);      


     
     
 module.exports = router;