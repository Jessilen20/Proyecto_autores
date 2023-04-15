const express = require('express');
const cors = require('cors');

// para leer datos de formulario
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//conversacion entre puertos
app.use(cors());

require('./server/models/db');

//conexion a las rutas de la base
require('./server/routes/author.routes')(app);

// cuando se inicia el servidor
app.listen(8000, () => console.log("Ejecutando el servidor en el puerto 8000"));