const name = 'kang'
const age = 24

const user = {
    name, //name: name
    age, //age: age
    location: 'Thailand'
}

// console.log(user)

//-----------------

const product = {
    label: 'laptop',
    price: 20000,
    stock: 100,
    salePrice: undefined
}

// const label = product.label
// const price = product.price

// const { label: productLable, price, salePrice, stock} = product

// // console.log(label)
// console.log(productLable)
// console.log(price)
// console.log(stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)

