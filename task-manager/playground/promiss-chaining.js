require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5cf3d1607ebc3321ac0f2dcc', {
//     age: 15
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 15 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5cf3d1607ebc3321ac0f2dcc', 3).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})