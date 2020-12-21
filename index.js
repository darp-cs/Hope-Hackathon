
const request = require("request");
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const apiKey = 'your api key';
const router = express.Router();

app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


router.get('/pollution',function(req,res){
res.sendFile(path.join(__dirname+'/html/pollution.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);

const port = process.env.PORT || 3002
app.listen(port, ()=>{
    console.log(`This server is running on ${port}`)
})