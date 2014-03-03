//Copy and rename file.

var fs = require('fs');
var path = require('path');

function copyRename(filePath, count) {
	if(typeof filePath == "string" && typeof count == "number") {
		var ext = path.extname(filePath);
		for (var i=1; i< count+1; i++) {
			fs.createReadStream(filePath).pipe(fs.createWriteStream(i+ext));
		}
	} else {
		throw "filePath should be a string and count must be a number";
	}
}
exports.copyAndRename = copyRename;