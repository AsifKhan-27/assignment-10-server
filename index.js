const express=require('express');
const app=express();
const cors = require('cors');
const port= process.env.PORT || 5000;

app.use(cors());

const categories=require('./data/categories.json');
const details=require('./data/details.json');

app.get('/', (req, res)=>{
    res.send('API is Running ');
});

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/category/:id', (req, res)=>{
    const id=req.params.id;
    const detailsData= details.filter( d=> d.d_id===id);
    res.send(detailsData);
})

app.listen(port, ()=>{
    console.log('Dragon News server runnung on port', port);
})