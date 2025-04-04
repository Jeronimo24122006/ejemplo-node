const express=require(`express`);
const router=express.Router();
const userController=require(`../controllers/user.controller`);
//const { index } = require(`../controllers/user.controller`);
router.get(`/`, userController.index);
//ruta para el metodo post*/
router.post("/", userController.create );
router.put("/:id",userController.update);
router.delete("/:id", userController.destroy);
router.get("/:id",userController.show)


//router.get(`/`.index)

module.exports=router;