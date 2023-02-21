const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(8080,()=>{
    try{
     
console.log('db connected')
    }
    catch(err){
        console.log('check config',err)
    }

    console.log(`listening on port localhost 8080`)
})