const Author = require("../models/authors");

//mensaje de prueba
module.exports.prueba = (req, res) => {
    res.json({
        message: "Saludos desde el Servidor"
    })
}

//agregar un autor
module.exports.newAuthor = async (req,res) => {
    const name = req.body
    
    try {
        const author = await Author.create(
            name
        )
         // respuesta en caso de que todo esté bien
        return res.json({ message: "Autor agregado", _id: author._id })
    } catch (error) {
        console.log(error)
        // respuesta en caso de un error de validación
        return res.json(error, 400)
    }
}

//mostrar todos los autores
module.exports.allAuthors = async (req, res) => {
    const authors = await Author.find()
    res.json({ authors: authors })
}

//eliminar un autor
module.exports.deleteAuthor = async (req, res) => {
    const id = req.params.id
    try{
        const author = await Author.deleteOne({ _id: id })
        return res.json({ eliminado: 'ok' })
    }
    catch (error){
        console.log(error)
        return res.json(error, 400)
    }
}

//editar un autor
module.exports.actualizar = async (req, res) => {
    const id = req.params.id
    const name = req.body

    try {
        await Author.findOneAndUpdate(
            { _id: id }, // criterio de búsqueda
            { $set: name }  // fijamos los nuevos valores
        )
        return res.json({ mensaje: 'fue editado' })
    }
    catch (error) {
        return res.json(error, 400)
    }
}

//seleccionar un autor
module.exports.oneAuthor =async(req,res) =>{
    const id = req.params.id
    const author = await Author.findOne({ _id: id })
    res.json(author)
}