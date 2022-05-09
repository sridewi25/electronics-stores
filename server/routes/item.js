const itemRoute = require('express').Router()
const { ItemController } = require('../controller')

itemRoute.get('/',ItemController.getAllItem);
itemRoute.post('/create',ItemController.createItem);
itemRoute.get('/delete/:id',ItemController.deleteItem);
itemRoute.post('/update/:id',ItemController.updateItem);


module.exports = itemRoute;