var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

var db
MongoClient.connect('mongodb://EmileSchneider:emile@ds117136.mlab.com:17136/1timechances', (err, database) => {
  if (err) return console.log(err)
  db = database
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

module.exports = router;
