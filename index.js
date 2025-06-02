//express para la api 
//mysql para la base de datos
//cors para conectar desde cualquier URL 
const express = require ('express');
const cors = require ('cors');
const mysql = require('mysql2');
const {conexion} = require("./conexionBD");
const {extraerEstudiantesHombres} = require("./extraccionDeDatos")
const {extraerEstudiantesMujeres} = require("./extraccionDeDatos")
const app = express();
const port = 3000;
conexion.connect();
app.use(cors());
app.use(express.json());

app.get("/estudiantes", (req, res) => {
    extraerEstudiantesHombres(conexion, (err, resultados) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
      } else {
        res.json(resultados);
      }
    });
  });
  
app.listen(port,()=> 
console.log("servidor corriendo en localhost")) 
