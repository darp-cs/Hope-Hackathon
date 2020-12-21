
"use strict"

let index = 0;
const show = () => {
    let i = 0;
    const slides = document.getElementsByClassName('slide');
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    index = index + 1;
    if(index > slides.length){
        index = 1;
    }
    slides[index-1].style.display="block";
    setTimeout(show, 2700);

}
show();

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
