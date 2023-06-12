require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')
connection()
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")

//routes
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

//middleware
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080

//listen
app.listen(port, ()=>console.log('Nasłuchiwanie na porcie '+port))