const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../public')
const app = express()

var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.on('createMessage', (message) => {
        console.log('Created Msg', message)
        io.emit('newMessage', {
            from:message.from,
            text:message.text,
            createdAt:new Date().getTime()
        })
    })

    socket.on('disconnect', () => {
        console.log('client')
    })

    socket.on('createEmail', (data) => {
        console.log("Email Created ", data)
    })

})

const port = process.env.PORT || 3791
server.listen(port, () => {
    console.log(`Server is up on port : ${port}`)
})

