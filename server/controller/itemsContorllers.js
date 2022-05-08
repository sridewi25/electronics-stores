const {item} = require('../models');


class ItemController {
    static async getAllItem(req,res){
        try{
            let items = await item.findAll({
                order: [
                    ['id','asc']
                ]
            })
            res.json({
                items
            })
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createItem(req,res){
        try{
            const { name,price,category,image,userId,brandId } = req.body
            let items = await item.create({
                name,price,category,image,userId,brandId
            })
            res.json(items)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async updateItem(req,res){
        try{
                const id =Number(req.params.id)
                const {name,price,category,image,userId,brandId} = req.body
    
                let items = await item.update({
                    name,price,category,image,userId,brandId
                },{
                    where: {id}
                })
                res.json(items)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async deleteItem(req,res){
        try{
            const id = Number(req.params.id)

            let items = await item.destroy({
                where:{id}
            })
            res.json(items)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }



}

module.exports = ItemController;