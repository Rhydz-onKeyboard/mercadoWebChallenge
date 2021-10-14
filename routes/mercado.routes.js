const { Router } = require('express');

const mercadoController = require('../controllers/mercado');
const router = Router();

router.get('/', mercadoController.getProductos);

router.post('/:producto', mercadoController.postItemCart)

module.exports = router;