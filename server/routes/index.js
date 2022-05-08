const route = require('express').Router()

route.get('/api',(req, res) => {
    res.json({
        message:"Home Page"
    })
})

const userRoutes = require('./user')
const brandRoutes = require('./brand')
const itemRoutes = require('./item')


route.use('/api/users',userRoutes)
route.use('/api/items',itemRoutes)
route.use('/api/brands',brandRoutes)



module.exports = route