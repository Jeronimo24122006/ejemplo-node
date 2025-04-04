const { put } = require("../routes/user.routes");
const User = require(`../models/user.model`);
const index = async (req, res) => {
    try {
        const users = await User.create(req.body);

        if (users || users.length == 0) {
            return res.status(404).json({
                status: true,
                msg: "No existen usuarios en la base de datos",
                data: null,
            });

            return res.status(200).json({
                status: true,
                msg: "Listado de usuarios obtenido correctamente",
                data: users
            })
        } 

    }catch (error) {
        return res.status(500).json({
            status: false,
            msg: `Error al obtener listado de usuarios: ${error.mensagge}`,
            data: null,
        })
    }
}

const create = async (req, res) => {
        try {

            const user = await User.create(req.body);

            return res.status(201).json({
                status: true,
                msg: "Listado de usuarios obtenido correctamente",
                data: users
            });
        } catch (error) {

        }
    };


    const update = async (req, res) => {
        try {
            const id = req.params.id;

            const user = await User.findByPk(id);
            if(!user){
                return res.status(404).json({
                    status:false,
                    msg:`Usuario a modificar con el id: ${id}, no encontrado en base de datos`,
                    data:null,
                });
            }
            const emailExist =await User.findOne({
                where: {email: req.body.email,id:{[ Op.ne]: idUser}},
            })
            const userUpdate=await User.update( req.body, {
                where: {id: idUser},
            })

            const userUpdated=await User.findByPk(id);

            return res.status(200).json({
                status:true,
                msg:`Usuario con el id: ${id}, actualizado de forma correcta`,
                data:userUpdated
            });
        } catch (error) {
            
        }
    };

    const destroy = async (req, res) => {
        try {



            const idUser = req.params.id;
            const user = await User.findByPk(idUser);
            if(!user){
                return res.status(404).json({
                    status:false,
                    msg:`Usuario con el id: ${idUser},` 
                })
            }

        } catch (error) {
            
        }
    };

    const show = (req, res) => {
        try {
            
        } catch (error) {
            
        }
}
    


    module.exports = {
        index,
        create,
        update,
        destroy,
        show,
    }
