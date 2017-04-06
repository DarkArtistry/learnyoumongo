var mongo = require('mongodb').MongoClient

var argv = process.argv

var firstArg = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) throw err

  var parrots = db.collection('parrots')

  parrots.count({
    age: {$gt: +firstArg}
  }, function (err, count) {
    if (err) throw err

    console.log(count)
  })
  db.close()
})
