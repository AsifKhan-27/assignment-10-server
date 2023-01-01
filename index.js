const express=require('express');
const app=express();
const cors = require('cors');
const port= process.env.PORT || 5000;

app.use(cors());

const categories=require('./data/categories.json');

app.get('/', (req, res)=>{
    res.send('API is Running ');
});

app.listen(port, ()=>{
    console.log('Dragon News server runnung on port', port);
})