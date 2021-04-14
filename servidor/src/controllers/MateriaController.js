const express = require('express');
const router = express.Router();


const MateriaService = require('../services/MateriaService');


router.route('/Materia')
      .get(MateriaService.ListarMaterias)
      .post(MateriaService.CrearMateria);

router.route('/Materia/:id')
      .get(MateriaService.obtenerMateriaId)
      .put(MateriaService.actualizarMateria)
      .delete(MateriaService.eliminarMateria);      


     
     
 module.exports = router;