const socket = io.connect('http://localhost:3000')

//receive
// socket.on('countUpdate', ({ count, message }) => {
//     console.log('count: ', count)
//     console.log('message: ', message)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     //send
//     socket.emit('increment', {
//         message: `increment from client => ${new Date().toLocaleString()}`,
//     })
// })

// document.querySelector('#decrement').addEventListener('click', () => {
//     socket.emit('decrement', {
//         message: `decrement from client => ${new Date().toLocaleString()}`,
//     })
// })

socket.on('message', (message) => {
    console.log('receive message: ', message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    // const message = document.querySelector('input[name="message"]').value
    const message = e.target.elements.message.value

    socket.emit('sendMessage', message)
})
