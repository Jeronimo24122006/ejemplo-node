const { Router } = require("express");
const router=Router();

//ruta para el controlador de usuarios*/
const userRouter = require ("./src/routes/user.routes");
router.use("/users", userRouter);

const movieRouter = require("./src/routes/movies.routes");
router.use("/movies", movieRouter);

module.exports=router;

