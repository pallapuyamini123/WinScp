var express = require("express")
var MongoClient=require('mongodb').MongoClient;
let bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let options = {
    socketTimeoutMS: 1000000,
    connectTimeoutMS: 1000000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 1000000,
    keepAlive: true,
   
};

var url = "mongodb://vizagTeam:YEMD3gm68pJ7vrKKBhZC@13.58.237.142:27017/admin";
var client = new MongoClient(url, options);
client.connect();
var dbo = client.db("P1P2P3");
var collection_prod = dbo.collection("yamini_test");
console.log("db connection successful");


app.post('/users', async function (req, res) {
    arr=req.body.myobj;
    console.log(arr);
   
   let obj_data = await collection_prod.insertMany(arr);
   console.log(obj_data);

    res.send(arr)
  })



// Set Port
app.set('port', (process.env.PORT || 2500));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});