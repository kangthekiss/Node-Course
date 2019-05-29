
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(10, 5, (result) => {
    console.log(result)
})