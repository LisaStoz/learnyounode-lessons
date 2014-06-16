var http = require('http');
var port = process.argv[2];
var url = require('url');
var map = require('through2-map');

var server = http.createServer(function(request, response){

	var parsedRequest = url.parse(request.url, true);
	var result = '';
	var json;
	try {
		var isoTime = parsedRequest.query.iso;
		
		if (parsedRequest.pathname === "/api/parsetime") {
			
		} else if (parsedRequest.pathname === "/api/unixtime") {
			json = {
				unixtime: new Date(isoTime).getTime()
			};
			result = JSON.stringify(json);
		}
	} catch (e)  {}
	
	response.write(result, 'utf8');
	response.end();
});
server.listen(port);