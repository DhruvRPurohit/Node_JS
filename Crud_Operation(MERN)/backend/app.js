const express = require('express')
const app = express()
const userRoutes = require('./Routes/userRoutes')
const cors = require('cors')

//for use json 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Corse isssue Handle
const corseOption = {
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PATCH,HEAD",
    credentials: true,
}

app.use(cors(corseOption))

app.use('/api/crud', userRoutes)
app.listen(5000, () => {
    console.log("5000 port started...")
})

