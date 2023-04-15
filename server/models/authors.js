const mg = require('./db')

const Author = mg.model('Author', mg.Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        minLength: [4, 'Author name must have at least 4 letters']
    }   
}, { timestamps: true }))

module.exports = Author