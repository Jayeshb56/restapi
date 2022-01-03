const express = require('express');
const app = express();

//route
app.get('/',(req,res) => {
    res.send('we are at home')
});

app.post('/posts',(req,res) => {
    res.send('we are in post')
});

app.delete('/delete',(req,res) => {
    res.send('we are in delete')
});

app.put('/put',(req,res) => {
    res.send('we are in put')
});





//creating to lisen the server on port
app.listen(8060)