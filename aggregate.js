var mongo = require('mongodb').MongoClient

var argv = process.argv

var sizeArg = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err,db) {
if (err) throw err

var prices = db.collection('prices')

prices.aggregate([
      { $match: { size: sizeArg }}
    , { $group: {
        _id: 'aggre' // This can be an arbitrary string in this case
      , aggre: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
]).toArray(function(err, results) {
      if (err) throw err
      var finalAggre = results[0].aggre
      console.log(Number(finalAggre).toFixed(2))
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
    })
db.close()
})
