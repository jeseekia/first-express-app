require('dotenv').config()
const express = require('express')

const app = express()

//Homepage route
app.get('/', function(req, res){
    res.send('Hello, Jeseekia')
})

app.get('/two', function(req, res){
    res.send('Page Two')
})

app.get('/research/:animal', function(req,res){
    res.send('Research ' + req.params.animal)
})

app.get('/square/:x', function(req, res){
    let numberEntered = Number(req.params.x)
    let result = numberEntered*numberEntered
    res.send(`${numberEntered} squared is ${result}`)
})

app.get('/cube', function(req, res){
    let x = Number(req.query.x)
    let result = x * x * x

    res.send(`${x} cubed is ${result}`)
})

app.listen(process.env.PORT, function(){
    console.log("I'm awake!")
})