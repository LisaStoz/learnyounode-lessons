var ls = require('./ls');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];


ls(directoryPath, fileExtension, function(err, result){
  if (err === null) {
    console.log(result.join('\n'));
  } else {
    console.log(err);
  }
});
