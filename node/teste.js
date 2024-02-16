const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res) => {


    res.send("<h1> Faela Ana </h1>")

})


app.listen(port,()=>{


    console.log('dando trabalho no porta '+port)

})