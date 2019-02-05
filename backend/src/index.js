const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://goweek:goweek123@ds263670.mlab.com:63670/goweek-dimas', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(require('./routes'))

const port = 3000
server.listen(port, () => {
    console.log('Server Up on port ' + port)
})