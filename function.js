var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 // Synchronous read
 var data = fs.readFileSync('input.txt');
 console.log("Synchronous read: " + data.toString());
 
 console.log("Program Ended");

 var fs = require('fs');

fs.rename('input.txt', 'inputfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});