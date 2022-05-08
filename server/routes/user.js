const userRoute = require('express').Router()
const { UserController } = require('../controller')

userRoute.get('/',UserController.getAllUser);
userRoute.post('/create',UserController.createUser);
userRoute.get('/delete/:id',UserController.deleteUser);
userRoute.post('/update/:id',UserController.updateUser);


module.exports = userRoute