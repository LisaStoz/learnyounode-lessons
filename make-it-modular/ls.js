module.exports = function(directoryPath, fileExtension, callback) {
  var fs = require('fs');
  var path = require('path');

  var fileExtension = '.' + fileExtension;

  var matchingFiles = [];

  fs.readdir(directoryPath, function(err, filenames){
    if (err === null) {
      var index = 0;
      while(index < filenames.length) {
        if (path.extname(filenames[index]) === fileExtension) {
          matchingFiles.push(filenames[index]);
        }
        index++;
      }
      return callback(null, matchingFiles);
    } else {
      return callback(err);
    }

  });
}
