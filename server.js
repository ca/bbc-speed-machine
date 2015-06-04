var express = require('express'),
	path = require('path'),
    http = require('http');

var app = express();

app.use(express.static(__dirname + '/pub'));

app.get('/', function(req, res){ res.sendFile('index.html'); });
app.get('/inventory', function(req, res){ res.sendFile('inventory.html', { root: __dirname+'/pub' }); });
app.get('/projects', function(req, res){ res.sendFile('projects.html', { root: __dirname+'/pub' }); });
app.get('/about', function(req, res){ res.sendFile('about.html', { root: __dirname+'/pub' }); });
app.get('/repairs', function(req, res){ res.sendFile('repairs.html', { root: __dirname+'/pub' }); });
app.get('/events', function(req, res){ res.sendFile('events.html', { root: __dirname+'/pub' }); });
app.get('/admin', function(req, res){ res.sendFile('admin.html', { root: __dirname+'/pub' }); });
app.get('/contact', function(req, res){ res.sendFile('contact.html', { root: __dirname+'/pub' }); });
app.get('/fabrication', function(req, res){ res.sendFile('fabrication.html', { root: __dirname+'/pub' }); });

http.createServer(app).listen(80, function() {
    console.log('Server listening on port 80...');
});