var mongo = require('mongodb').MongoClient

var argv = process.argv

var dataName = argv[2]
var collectionIn = argv[3]
var targetId = argv[4]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, dataName) {
  var dCollection = dataName.collection(collectionIn)
  dCollection.remove({
      '_id': targetId
    })
  db.close()
})
