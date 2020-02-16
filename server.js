///Dependecies//
var express = require("express");
var path = require("path");
var fs = require('fs');


//Setting the express application///
var app = express();
var PORT = process.env.PORT || 3000;

///To Parse the Data////
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/assets",express.static('assets'));


//Routes//
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  }); 
  
  app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
  });
  
  app.get('/api/notes', function (req, res) {
  return res.json(JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')));
  });
  ////To create new data created in the NoteTaker////
  app.post("/api/notes", function(req, res) {
    const notes = require('./db/db.json');
    notes.push({
        title: req.body.title,
        text : req.body.text, 
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(true);
  })

  ///Deleting the text////

  app.delete('/api/notes/:id',function(req,res) {
    res.send('Got a DELETE request at /api/notes/:id')
    const notes = JSON.parse(fs.readFileSync('./db/db.json' ));
    const newNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.json(true);
  });


  ////Listen to the Port/////
app.listen(3000, function() {
    console.log("The App is running and listening!" + PORT)
  });
