const PUsuarioModel = require('../models/ParcialUsuarioModel')
const PProductModel = require('../models/ParcialProductosModel')
const PPedidosModel = require('../models/ParcialPedidosModel')
const PCategoriasModel = require('../models/ParcialCategoriaModel')


    ListarUsuario = async (req,res) => {
        try {
            const usuario = await PUsuarioModel.find();

            res.status(200).json({
                usuario
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        } 
    }


    ListarCategoria = async (req,res) => {
        try {
            const categorias = await PCategoriasModel.find();

            res.status(200).json({
                categorias
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        } 
    }

    ListarProduct = async (req,res) => {
        try {
            const producto = await PUsuarioModel.find().populate("parcialCategorias");


            res.status(200).json({
                producto
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        } 
    }

    ListarPedido = async (req,res) => {
        try {
            const producto = await PUsuarioModel.find().populate("parcialProductos").populate("parcialCategorias");


            res.status(200).json({
                producto
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        } 
    }

    