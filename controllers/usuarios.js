const { response, request } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get mundo'
    });
}

const usuariosPut = (req = request, res = response) => {
    const {id} = req.params;
    const { nombre, apellido } = req.query;


    res.json({
        msg: 'put mundo',
        id,
        nombre,
        apellido
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post mundo',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete mundo'
    });
  }



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}