const mg = require("mongoose");

//conexion a la base de datos
mg.connect("mongodb://127.0.0.1:27017/DB_Autores", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
    .catch(err => console.log("Hubo un error al conectarse a la bd",err));

module.exports = mg