var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/My_Database')
    .then(() => console.log("Conneceted to MongoDB Suceesfully .."))
    .catch((err) => console.log("Error Occuered : ", +err))

const CurdSchema = new Schema({
    name: String,
    email: String,
    phone: Number
})

const CrudModel = mongoose.model('CrudUser', CurdSchema)
module.exports = CrudModel