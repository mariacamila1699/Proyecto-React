const express = require('express');
const router = express.Router();


const GrupoService = require('../services/GrupoService');


router.route('/Grupo')
      .get(GrupoService.ListarGrupo)
      .post(GrupoService.CrearGrupo);

router.route('/Grupo/:id')
      .get(GrupoService.obtenerGrupoId)
      .put(GrupoService.actualizarGrupo)
      .delete(GrupoService.eliminarGrupo);      


     
     
 module.exports = router;