require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kagisomphayi:bIKEbqmoRTpf9Waw@subscribers.psvk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(9000, () => console.log('Server Started'))