const express = require('express')
const router = express.Router()
const { Display, Insert, Delete, Update, Read } = require('../Controller/Student_Controler')

router.get("/Display", Display)
router.post('/Insert', Insert)
router.get("/Delete/:id", Delete)
router.post("/Update/:id", Update)
router.get("/Display/:id", Read)


module.exports = router