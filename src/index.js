var express = require('express')
var os = require('os')
var ip = require('ip')
var app = express()
const PORT = 5000


app.get('/', (req, res) => res.send("Application running in <br> Host: " + os.hostname + " | IP: " + ip.address() ))

app.listen(PORT)