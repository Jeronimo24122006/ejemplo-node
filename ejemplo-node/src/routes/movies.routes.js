const express=require('express');
const router=express.Router();
const movieController=require('../controllers/movie.controller');
//const { index } = require(`../controllers/user.controller`);
router.get('/', movieController.index);
//ruta para el metodo post*/
//router.post("/", movieController.create );
//router.put("/:id",userController.update);
//router.delete("/:id", userController.destroy);
//router.get("/:id",userController.show)


//router.get(`/`.index)

module.exports = router;