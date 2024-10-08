
const express=require('express');
const mongoose =require('mongoose');

const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/Sampledata',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("database connected successfully..!"))
.catch((err)=>console.log("error from database connection",err));

app.listen(8000,()=>{console.log('Listening to 8000 port');})