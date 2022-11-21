const express = require('express');
const adidasRouter = require('./routes/adidas-router')
const cors = require('cors');
const app = express()
const port = 3000;


app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/adidas',adidasRouter)


app.get('/',(req,res)=>{
    res.send({massage:"success"});
});

app.listen(port,()=>{
    console.log(`looking to port : ${port}`);
})