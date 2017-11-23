var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient

var db
MongoClient.connect('mongodb://EmileSchneider:emile@ds117136.mlab.com:17136/1timechances', (err, database) => {
  if (err) return console.log(err)
  db = database
})

/* GET home page. */
router.get('/', function(req, res) {
  res.send({
    "someData": "antoher data",
    "anObject": {
      "id": "object"
    },
    "aList": ["listitem1", "listitem2"]
  });
});
module.exports = router;
