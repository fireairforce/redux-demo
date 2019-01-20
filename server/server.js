const express = require('express');
const mongoose = require('mongoose');

// 链接mongodb
const DB = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB);
mongoose.connection.on('connected',function(){
    console.log('mongoose connect success');
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required:true},
    age:{type:Number,required:true}
}))

// User.create({
//     user:'wd',
//     age:'19'
// },function(err,doc){
//   if(!err){
//       console.log(doc)
//   }else{
//       console.log(err);
//   }
// })

User.remove({age:19},function(err,doc){
    if(!err){
        console.log('delected success');
    }else{
        console.log(err);
    }
})

const app = express();

app.get('/',function(req,res){
    res.send('<h1>Just Do It</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
        // res.json(doc)
        if(!err){
            res.json(doc)
        }else{
            console.log(err);
        }
    })
    // res.json({name:'zoomdong hhh',type:'it'})
})
app.listen(9093,function(){
    console.log('Start at 9093')
})