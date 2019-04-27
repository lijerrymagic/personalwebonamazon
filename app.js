const express = require('express')
const fs = require('fs')
const https = require('https');
const http = require('http');
const app = express()

// Constants
const HTTPS_PORT = process.env.PORT | 3000;
const HTTP_PORT = 80

app.use(function (req, res, next){
	console.log(req.protocol);
	if (req.protocol === 'http'){
		res.redirect(301, 'https://' + req.host  + ":" + HTTPS_PORT + req.url);
		console.log("HTTPS request", req.method, req.url, req.body);
	}
	return next();
});

let httpsOptions = {
   cert:fs.readFileSync('./ssl/www_zeyuli_me.crt'),
   ca:fs.readFileSync('./ssl/www_zeyuli_me.ca-bundle'),
   key:fs.readFileSync('./ssl/zeyuli_me.key')
};

app.use(express.static('frontend'));

https.createServer(httpsOptions,app).listen(HTTPS_PORT, function () {
    console.log('HTTPS on port 3000');
});
http.createServer(app).listen(HTTP_PORT);