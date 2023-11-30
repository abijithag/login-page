var express = require('express')
var router = express.Router()
let hello=require('./server')
const abi = require('./server')


//Login User
router.get('/',(req,res)=>{
    if(req.session.login){
        res.redirect('/dashboard')
       
    }else{
        res.render('base',{title:"Login System"})
    }
    
})

router.get('/dashboard',(req,res)=>{
     if(!req.session.login){
        res.redirect('/')
 }else{
        res.render('dashboard',{user:req.session.user})
    }
})

router.post('/hai',(req,res)=>{
    res.render('base')

})




router.post('/login',(req,res)=>{
   

    var data = [abijith = { fname: 'abijith', uname: 'abijith', pass: "123" }, Brototype  = { fname: 'Brototype', uname: 'brototype', pass: "321 " }]

    let isAuthorise = false

    for(let i=0;i<data.length;i++){

        if(req.body.username == data[i].uname && req.body.password == data[i].pass){

            req.session.login = true
            isAuthorise = true

            var name = data[i]

            req.session.user = name.fname
            
    
        }
        
}
if (isAuthorise) {

    res.redirect('/dashboard');
}
  else {

    res.render('base', { message: 'Invalid username and password' });
    
  } 

})


router.post('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/dashboard');
})

module.exports = router

