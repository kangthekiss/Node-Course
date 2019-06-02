
// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000)
// }

// add(10, 5, (result) => {
//     console.log(result)
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) return console.log(error)

    console.log(result)
})