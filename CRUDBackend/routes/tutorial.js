var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db

// MongoClient.connect('mongodb://EmileSchneider:emile@ds117136.mlab.com:17136/1timechances', (err, database) => {
//   if (err) return console.log(err)
//   db = database
// })
//
// function toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i)
//     if (arr[i] !== undefined) rv[i] = arr[i];
//   return rv;
// }
//
// router.get('/', function(req, res, next) {
//   db.collection('quotes').find().toArray(function(err, results) {
//     res.json(results)
//   });
// })

router.get('/', function(req, res) {
  res.jsonp({ "data" :{
        "id": "asddas",
        "user": "hanswurst"
      },
      "moredata": {
        "id": "asgfd",
        "user": "hanswsdfurst"
      },
      "evenMoreData": {
        "id": "bbfd",
        "user": "hansw33urst"
      }})
});


module.exports = router;
