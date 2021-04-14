const UsuarioModel = require('../models/UsuarioModel');


CrearUsuario = async (req, res) => {

  try {

    const Usuario = new UsuarioModel(req.body);
    await Usuario.save();

    res.status(200).json({
      mensaje: "Usuario creado exitosamente"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al crear un Usuario"
    });

  }

};

ListarUsuarios =  async (req, res) => {


      /*UsuarioModel.find().populate("roles").then(usuario => {
        res.status(200).json({
          usuario
        });
    
      }).catch(error => {
        res.status(500).json({
          message: "Error al Listar todos los Usuarios"
        });
    
      })*/

      try{

        const usuario = await UsuarioModel.find().populate("roles");
        res.status(200).json({
          usuario

        });   

      }catch (error) {

    // Respondiendo al cliente
    res.status(500).json({
      message: "Error al mostar los  Usuarios"
    });

  }
      
};

obtenerUsuarioId = async (req, res) => {

  
  UsuarioModel.findById(req.params.id).populate("roles").then(usuario => {
    res.status(200).json({
      usuario
    });

  }).catch(error => {
    res.status(500).json({
      message: "Error al Obtener Usuario"
    });

  })

};

actualizarUsuario = async (req, res) => {

  try {

    await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });

    // Respondiendo al cliente
    res.status(200).json({
      message: "Usuario  actualizado exitosamente"
    });

  } catch (error) {

    // Respondiendo al cliente
    res.status(500).json({
      message: "Error al actualizar Usuario"
    });

  }

};

eliminarUsuario = async (req, res) => {

  try {

    await UsuarioModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje: "Usuario  eliminado exitosamente"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al eliminar Usuario"
    });

  }

};




module.exports = { CrearUsuario, ListarUsuarios, obtenerUsuarioId, actualizarUsuario, eliminarUsuario };