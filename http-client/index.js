http = require('http');

var url = process.argv[2]; // url to request

http.get(url, function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    if (data !== undefined) console.log(data);
  });
  response.on('error', function(error){
    if (error !== undefined) console.log(error);
  });
  response.on('end', function(end){
    if (end !== undefined) console.log(end);
  });
});
