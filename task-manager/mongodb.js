// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const uri = 'mongodb+srv://warapol:db@1234@cluster0-dygoc.mongodb.net'
const dbName = 'task-manager'

// const id = new ObjectID()

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database.')

    const db = client.db(dbName)

    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

})


  // --insert--
// db.collection('users').insertOne({
//     _id: id,
//     name: 'potchara',
//     age: 24
// }, (error, result) => {
//     if(error) return console.log('Unable to insert user')

//     console.log(result.ops)
// })

// db.collection('users').insertMany([
//     {
//         name: 'kang',
//         age: 20
//     },
//     {
//         name: 'rak',
//         age: 18
//     }
// ], (error, result) => {
//     if(error) return console.log('Unable to insert documents!')

//     console.log(result.ops)
// })

//------------------------------------------------------------------------------------------------------

// --read--
// db.collection('users').findOne({ _id: new ObjectID('5cf2bc0b0f614c2a17769330') }, (error, user) => {
//     if(error) return console.log('Unable to fetch.')

//     console.log(user)
// })

// db.collection('users').findOne({ name: 'Warapol', age: 24 }, (error, user) => {
//     if(error) return console.log('Unable to fetch.')

//     console.log(user)
// })

// db.collection('users').find({ age: 25 }).toArray((error, users) => {
//     console.log(users)
// })

// db.collection('users').find({ age: 25 }).count((error, count) => {
//     console.log(count)
// })

// db.collection('tasks').findOne({ _id: new ObjectID('5cf2bf765f1f562e2ce42883')}, (error, task) => {
//     console.log(task)
// })

// db.collection('tasks').find({ complete: false }).toArray((error, tasks) => {
//     console.log(tasks)
// })

//-----------------------------------------------------------------------------

//--update--
// const updateUser = db.collection('users').updateOne({ 
//     _id: new ObjectID('5cf2bc39b7bbef2a657b91f0')
// }, {
//     $inc: {
//         age: 1
//     }
// })

// updateUser.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// db.collection('tasks').updateMany({
//     complete: false
// }, {
//     $set: {
//         complete: true
//     }
// }).then((result) => {
//     console.log(result.modifiedCount)
// }).catch((error) => {
//     console.log(error)
// })