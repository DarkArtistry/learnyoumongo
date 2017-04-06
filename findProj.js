var mongo = require('mongodb').MongoClient

var argv = process.argv
var targetedAge = argv[2]

// console.log(argv);
// {$gt: +targetedAge}
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  // db gives access to the database
  if (err) return console.error(err)

  var parrots = db.collection('parrots')
  parrots.find({
    age: {$gt: +targetedAge}
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function (err, documents) {
    console.log(documents)
  })
  db.close()
})
