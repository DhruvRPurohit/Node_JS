const express = require('express');
const app = express()
const Student_routes = require('./Routes/Student_routes')

app.listen(3000, () => console.log("Server running on 3000 Port ...."))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/Student/Data', Student_routes)