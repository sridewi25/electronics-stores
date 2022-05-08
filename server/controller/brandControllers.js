const {brand} = require('../models');


class BrandController {
    static async getAllBrand(req,res){
        try{
            let brands = await brand.findAll({
                order: [
                    ['id','asc']
                ]
            })
            res.json({
                brands
            })
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createBrand(req,res){
        try{
            const { name } = req.body
            let brands = await brand.create({
                name
            })
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async updateBrand(req,res){
        try{
                const id =Number(req.params.id)
                const {name} = req.body
    
                let brands = await brand.update({
                    name
                },{
                    where: {id}
                })
                res.json(brands)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async deleteBrand(req,res){
        try{
            const id = Number(req.params.id)

            let brands = await brand.destroy({
                where:{id}
            })
            res.json(brands)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }



}

module.exports = BrandController;