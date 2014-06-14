fs = require('fs');
path = require('path');

var directoryPath = process.argv[2];
var fileExtension = '.' + process.argv[3];

fs.readdir(directoryPath, function(err, filenames){
  var index = 0;
  while(index < filenames.length) {
    if (path.extname(filenames[index]) === fileExtension) {
      console.log(filenames[index]);
    }
    index++;
  }
});
