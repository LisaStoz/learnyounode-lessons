var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var waitingResults = 3;
var output = [];

function httpCollect(response, sequence) {
  var result = "";
  response.setEncoding('utf8');
  response.on("data", function(data){
    result = result + data;
  });
  response.on("error", function(error){
    result = result + data;
  });
  response.on("end", function(){
    waitingResults--;
    complete(result, sequence);
  });
}

http.get(url1, function(response){
  httpCollect(response, 0);
});

http.get(url2, function(response){
  httpCollect(response, 1);
});

http.get(url3, function(response){
  httpCollect(response, 2);
});


function complete(result, sequence) {
  output[sequence] = result;
  if (waitingResults === 0) {
    console.log(output.join('\n'));
  }
}
