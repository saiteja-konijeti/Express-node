const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors())
app.use(express.json())

app.post('/sum',function(req,res){
    const a=Number(req.body.a);
    const b=Number(req.body.b);
    res.json({
        "ans":a+b
    })
})
app.post('/sub',function(req,res){
    const a=Number(req.body.a);
    const b=Number(req.body.b);
    res.json({
        "ans":a-b
    })
})
app.post('/mul',function(req,res){
    const a=Number(req.body.a);
    const b=Number(req.body.b);
    res.json({
        "ans":a*b
    })
})
app.post('/div',function(req,res){
    const a=Number(req.body.a);
    const b=Number(req.body.b);
    res.json({
        "ans":a/b
    })
})

app.listen('3002')