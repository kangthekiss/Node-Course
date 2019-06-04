const express = require('express')
require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         return res.send('GET requests are disabled')
//     }    

//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ', port)
})

// const Task = require('../src/models/task')
// const User = require('../src/models/user')

// const main = async () => {
//     // const task = await Task.findById('5cf66a626d14751d998d2fdf')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5cf66994e8b3851b5e9c7b07')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()


