var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response){
	var fileContents = fs.createReadStream(file, {encoding: 'utf8'});
	
	fileContents.pipe(response);
});

server.listen(port);

// file:///C:/Users/Jelizaveta/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/http.html