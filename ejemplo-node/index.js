
require("dotenv").config();

const express=require(`express`);
const cors= require('cors');
const app=express();
//permitir todas las solicitudes*/
app.use(cors());
app.use(express.json());
const routes=require(`./api.routes`);
app.use(`/api/v1`, routes);
app.get(`/`, (req, res) =>{
    res.send(`¡Hola mundo desde NOde. con express y nodemon`)
});

//--------------
//--Cargar archivo de conexion a la base de datos
//------------
const sequelize=require(`./src/models/dbconnection`);


//sincronizar los modelos con la base de datos*/
require(`./src/models/sync-tables`);


app.listen(process.env.PORT, async () => {
    console.log(process.env.BIENVENIDA, process.env.PORT);
 try {
    //conectarse a la base de datos*/
    await sequelize.authenticate();
    console.log("Conexion establecida con exito a la base de datos!!!!!");
//Crea las tabalas si no existen, 
 await sequelize.sync({alter:true});
 console.log("Tablas sincronizadas");
 } catch (error) {
    console.log("Error conectando a la base de datos", error);
 }




});

