const { response, request } = require('express');
const { StatusCodes } = require('http-status-codes');
const Carrito = require('../models/carrito.js')

const productos = ['Banana','Cebolla','Lechuga','Papas','Pimenton','Tomate'];
const producto = new Carrito('carrito');

module.exports = {
    getProductos: ( req = request, res = response, next ) => {
        res.render('dashboard', {
            layout: 'dashboard',
            productos,
            carrito: producto.dataBackup,
        });
    },
    postItemCart: ( req = request, res = response, next ) => {
        const { producto: productoParams } = req.params;
        const msg = `Registro ${ productoParams } ingresado`;
        producto.addNewItem(productoParams);
        console.log(msg);
        res.status(StatusCodes.CREATED).send();
    },
}