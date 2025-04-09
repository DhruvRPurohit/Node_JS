const StudentModel = require('../Model/Student_model')

const Display = async (req, res) => {
    let data = await StudentModel.find()
    if (data) {
        return res.json({
            Student_data: data
        })
    }
}

const Insert = async (req, res) => {
    let data = await StudentModel.create(req.body)
    if (data) {
        return res.json({
            "msg": "Data inserted Succesfully..."
        })
    }
}

const Delete = async (req, res) => {
    let id = req.params.id;
    let data = await StudentModel.findByIdAndDelete(id)
    if (data) {
        return res.json({
            "msg": "Data Deleted Sucesfully.."
        })
    }
}

const Update = async (req, res) => {
    let id = req.params.id
    let data = await StudentModel.findByIdAndUpdate(id, req.body)
    if (data) {
        return res.json({
            "msg": "Data Upadated Sucessfully..."
        })
    }
}

const Read = async (req, res) => {
    let id = req.params.id
    let data = await StudentModel.findById(id)
    if (data) {
        return res.json({
            userdata: data
        })
    }
}

module.exports = { Display, Insert, Delete, Update, Read };
