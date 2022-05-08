const itemRoute = require('express').Router()
const { ItemController } = require('../controller')

itemRoute.get('/',ItemController.getAllItem);
itemRoute.post('/create',ItemController.createItem);
itemRoute.delete('/delete/:id',ItemController.deleteItem);
itemRoute.update('/update/:id',ItemController.updateItem);


module.exports = itemRoute;