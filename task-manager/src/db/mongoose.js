const mongoose = require('mongoose')

const uri = 'mongodb+srv://warapol:db@1234@cluster0-dygoc.mongodb.net/task-manager-api'

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
})
