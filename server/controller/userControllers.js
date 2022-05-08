const {user} = require('../models');


class UserController {
    static async getAllUser(req,res){
        try{
            let users = await user.findAll({
                order: [
                    ['id','asc']
                ]
            })
            res.json({
                users
            })
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createUser(req,res){
        try{
            const { name } = req.body
            let users = await user.create({
                name
            })
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async updateUser(req,res){
        try{
                const id =Number(req.params.id)
                const {name} = req.body
    
                let users = await user.update({
                    name
                },{
                    where: {id}
                })
                res.json(users)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async deleteUser(req,res){
        try{
            const id = Number(req.params.id)

            let users = await user.destroy({
                where:{id}
            })
            res.json(users)
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }



}

module.exports = UserController;