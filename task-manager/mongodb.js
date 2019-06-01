// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const uri = "mongodb+srv://warapol:db@1234@cluster0-dygoc.mongodb.net"
const dbName = 'task-manager'

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database.')

    const db = client.db(dbName)

    // db.collection('users').insertOne({
    //     name: 'sasiwan',
    //     age: 23
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

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            complete: true
        },
        {
            description: 'Renew inspection',
            complete: false
        },
        {
            description: 'Pot plants',
            complete: false
        }
    ], (error, result) => {
        if(error) return console.log('Unable to insert documents!')

        console.log(result.ops)
    })
})