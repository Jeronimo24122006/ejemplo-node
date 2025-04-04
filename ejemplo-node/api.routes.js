const { Router } = require("express");
const router=Router();

//ruta para el controlador de usuarios*/
const userRouter = require ("./src/routes/user.routes");
router.use("/users", userRouter);
module.exports=router;

