const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

server.listen(3000, () => console.log('server is running...'))

app.use(express.static(path.join(__dirname, '../public')))

let count = 0

io.on('connection', (socket) => {
    console.log('user connected')

    //receive
    // socket.on('increment', ({ message }) => {
    //     count++
    //     //send
    //     io.emit('countUpdate', { count, message })
    // })

    // socket.on('decrement', ({ message }) => {
    //     count--
    //     io.emit('countUpdate', { count, message })
    // })

    //me
    socket.emit('message', 'welcome')

    //ignore me
    socket.broadcast.emit('message', 'a new user has join.')

    socket.on('sendMessage', (message) => {
        //every one
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'user has left')
    })
})
