const CrudModel = require('../Model/userModel')

const InsetData = async (req, res) => {
    let id = req.body.id
    let data
    if (id !== undefined) {

    }
    else {
        data = await CrudModel.create(req.body)
        if (data) {
            res.json({
                "msg": "Data Inserted Succesfully.."
            })
        }
    }

}
const Display = async (req, res) => {
    let data = await CrudModel.find()
    if (data) {
        return res.json({
            data: data
        })
    }
}

const DeleteData = async (req, res) => {
    let id = req.params.id
    console.log(id)
    const data = await CrudModel.findByIdAndDelete(id)
    if (data) {
        return res.json({
            "msg": "Data Deleted Sucessfully .."
        })
    }
}

const ReadData = async (req, res) => {
    let id = req.params.id
    const data = await CrudModel.findById(id)
    if (data) {
        return res.json({
            data: data
        })
    }
}

const UpdateData = async (req, res) => {
    let id = req.params.id
    const data = await CrudModel.findByIdAndUpdate(id, req.body)
    if (data) {
        res.json({
            "msg": "Data Updated Succesfully.."
        })
    }
}

module.exports = { InsetData, Display, DeleteData, ReadData, UpdateData }

// ObjectId('67ef84adad7bd8d962e60486')