import express from "express";

const app= express();

app.get('/',(req,res)=>{
    res.send({
        message: "API is running",
        status: "fine",
    });
});

app.listen(4000, console.log('Hello'));
