const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const router = require('./router')
const nocache = require('nocache'); 


const port = process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use(nocache());

//STATIC
app.use('/static',express.static(path.join(__dirname,'public')))






app.use(session({
    secret:'Secret-Key',
    resave:false,
    saveUninitialized:true,
})) 

app.use(router)



app.listen(port,()=>{
    console.log("Server Started http://localhost:3000");
}) 