/*const oper {add, sub, name}= require('./module');

console.log(oper);
console.log(oper.add(5,5));
console.log(oper.sub(10,5));
console.log(name);*/

 var http = require('http');
 
 var dt = require('./module');

 const oper = require('./module');
 
 let recommendedBooks = oper.getBookRecommendations();
 http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + dt.myDateTime());
 res.write("Print name: " + recommendedBooks);
 
 res.end();                                                                                       
 }).listen(3030);
