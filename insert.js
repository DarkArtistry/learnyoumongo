var mongo = require('mongodb').MongoClient
var first = process.argv[2]
var last = process.argv[3]
var url = 'mongodb://localhost:27017/learnyoumongo'
var obj = JSON.stringify({firstName: first, lastName: last})
console.log(obj)

mongo.connect(url, function (err, db) {
  if (err) throw err
  var docs = db.collection('docs')
  docs.insert(obj, function (err, data) {
    if (err) throw err
    console.log(data)
  })
  db.close()
})
