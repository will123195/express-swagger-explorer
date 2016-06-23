var express = require('express')
var app = express()

module.exports = app

app.use(express.static(__dirname + '/node_modules/swagger-ui/dist'))