// var MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/ottawa_eagenda', function (err, db) {
//   if (err) throw err;
//
//   db.collection('meeting').find().toArray(function (err, result) {
//     if (err) throw err;
//
//     console.log(result);
//
//   });
// });

// server.js

// BASE SETUP
// =============================================================================

import Meeting from "meeting";

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.post('/meetings', function(req, res) {
      let meeting = new Meeting();      // create a new instance of the Bear model
      meeting.name = req.body.type;  // set the bears name (comes from the request)
      meeting.id = req.body.id;
      meeting.date = req.body.date;
console.log('test');
      // save the bear and check for errors
      meeting.save(function(err) {
          if (err)
              res.send(err);
          res.json({ message: 'Meeting created!' });
      });
  });
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

