require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cf3605b0560604a1f2d0434').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ complete: false })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ complete: true })
    return count
}

deleteTaskAndCount('5cf3d4a389454725bc1b2e7f').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})