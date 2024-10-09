
const express=require('express');
const mongoose =require('mongoose');
const User=require('./Models/userModel')

const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/Sampledata',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("database connected successfully..!"))
.catch((err)=>console.log("error from database connection",err));


/* create */

const newUser = new User({
    name:"john doe",
    age:20,
    email:"john@gmail.com"
})

newUser.save()
.then(()=>console.log("user saved!"))
.catch(err =>console.log('error'))


app.listen(8000,()=>{console.log('Listening to 8000 port');})