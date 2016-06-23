var express = require('express')

module.exports = function (opts) {
  var app = express()
  app.use(express.static(__dirname + '/swagger-ui/dist'))
  return app
}