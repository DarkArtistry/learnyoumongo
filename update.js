var mongo = require('mongodb').MongoClient

var argv = process.argv

var dataName = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)

  var users = db.collection('users')
  users.update({
    'username': 'tinatime'
  }, {
    $set: {
      'age': 40
    }
  })

  db.close()
})
