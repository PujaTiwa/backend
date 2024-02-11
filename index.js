require('dotenv').config();
const express = require('express')
const app = express();

const port = 4000;

app.get('/', (req, res)=>{
    res.send('hii')
})

app.get('/twitter', (req, res)=>{
    res.send('hi jyoti')
})

app.get('/login', (req, res)=>{
    res.send('Login')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Example app listening on port ${port}`);
})