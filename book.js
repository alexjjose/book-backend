const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose") 

var app=Express()
app.get("/",(req,res)=>{
    res.send("welcome to my book management application")
})
app.get("/add",(req,res)=>{
    res.send("add books")
})
app.get("/search",(req,res)=>{
    res.send("welcome to book search page")
})
app.get("/delete",(req,res)=>{
    res.send("welcome to delete book page")
})
app.get("/edit",(req,res)=>{
    res.send("welcome to view all edit book")
})
app.get("/view all",(req,res)=>{
    res.send("welcome to view all book page")
})
app.listen(3003)