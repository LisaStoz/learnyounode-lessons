var fs = require('fs');
var pathToFile = process.argv[2];
var fileContents = fs.readFileSync(pathToFile);
var numberOfNewLines = fileContents.toString().split('\n').length - 1;
console.log(numberOfNewLines);
