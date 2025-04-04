var express = require('express')
const router = express.Router();

const { InsetData, Display, DeleteData, ReadData, UpdateData } = require('../Controlers/userControlers')

router.post('/create', InsetData)
router.get("/UserData", Display)
router.get("/DelteData/:id", DeleteData)
router.get("/Read/:id", ReadData)
router.post("/update/:id", UpdateData)

module.exports = router;