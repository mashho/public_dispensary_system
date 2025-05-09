const mongoose = require('mongoose')

mongoose.connect('Mongo Url')
    .then(res=>{
        console.log("DataBase Connected Successfully")
}).catch(err=>{
        console.log(err)
})

