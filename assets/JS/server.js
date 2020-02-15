///Dependecies//
var express = require("express");
var path = require("path");


//Setting the express application///
var app = express();
var PORT = process.env.PORT || 3000;

///To Parse the Data////
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('JS'));


//Routes//
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  }); 
  
  app.get("/notes.html", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
  });
  
  app.get('/api/notes', function (req, res) {
  return res.json(JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')));
  });
  ////To create new data created in the NoteTaker////
  app.post("/api/notes", function(req, res) {
    const notes = JSON.aprse9fs.readFileSync('./db/db.json', 'utf-8')
    notes.push({
        title: req.body.title,
        text : req.body.title 
    });
    fs.wrtieFileSync('./db/db.json', JSON.stringify(notes));
    res.json(true);
  })

  ///Deleting the text////


  ////Listen to the Port/////
app.listen(3000, function() {
    console.log("The App is running and listening!" + PORT)
  });
