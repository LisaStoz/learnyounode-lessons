var fs = require('fs');
var pathToFile = process.argv[2];
fs.readFile(pathToFile, function(err, fileContents){
  if (!err) {
    numberOfNewLines = fileContents.toString().split('\n').length - 1;
    console.log(numberOfNewLines);
  }
});
