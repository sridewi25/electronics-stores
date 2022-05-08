const brandRoute = require('express').Router()
const { BrandController } = require('../controller')

brandRoute.get('/',BrandController.getAllBrand);
brandRoute.post('/create',BrandController.createBrand);
brandRoute.get('/delete/:id',BrandController.deleteBrand);
brandRoute.post('/update/:id',BrandController.updateBrand);


module.exports = brandRoute