const express = require('express')
const fs = require('fs')
const https = require('https');
const http = require('http');
const app = express()

app.use(function (req, res, next){
	return next();
});

// Constants
const PORT = 3000;

// let httpsOptions = {
//    cert:fs.readFileSync('./ssl/www_zeyuli_me.crt'),
//    ca:fs.readFileSync('./ssl/www_zeyuli_me.ca-bundle'),
//    key:fs.readFileSync('./ssl/zeyuli_me.key')
// };
// app.get('/', (req, res) => res.redirect('/index.html'))

app.use(express.static('frontend'));

http.createServer(app).listen(PORT, function () {
    console.log('HTTP on port 3000');
});