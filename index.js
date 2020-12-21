const request = require("request");
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const apiKey = 'your api key';
const router = express.Router();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


app.get('/', function(req,res){
    res.sendFile('index.html');
})


const port = process.env.PORT || 3002
app.listen(port, ()=>{
    console.log(`This server is running on ${port}`)
})