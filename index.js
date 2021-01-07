var fs = require('fs'); //importing file system modules of node js
var filename = "package.json";
var binaryData = fs.readFileSync(filename); //reading binary data of file
var base64String = new Buffer(binaryData).toString("base64"); //converting binary data to base64 string
console.log(base64String);