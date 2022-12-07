const express = require('express')
const path = require('path')

const app = express()
const port = 5000

//get
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port)
console.log(`serwer działa na porcie ${port}`)
