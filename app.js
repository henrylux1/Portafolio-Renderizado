const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')



app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto1', (req,res)=>{
    res.render('proyecto1', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto2', (req,res)=>{
    res.render('proyecto2', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto3', (req,res)=>{
    res.render('proyecto3', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto4', (req,res)=>{
    res.render('proyecto4', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto5', (req,res)=>{
    res.render('proyecto5', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto6', (req,res)=>{
    res.render('proyecto6', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.render('home', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/proyecto2', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto2.html')
})

app.get('/proyecto3', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto3.html')
})

app.get('/proyecto4', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto4.html')
})

app.get('/proyecto5', (req,res)=>{
    res.sendFile(__dirname+'/public3/proyecto5.html')
})

app.get('/proyecto6', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto6.html')
})

app.get('/proyecto1', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto1.html')
})

app.get('/elementes',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})