//THE BUILT-IN URL MODULE
//The URL module splits up a web address into readable parts

//To split a web address into readable parts
//Use the require() method to include the URL module
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=frebruary';
//Parse an address with the url.parse() method and it will return a URL object with each part of the address as properties
var q = url.parse(adr, true);

//Return 'localhost:8080'
console.log(q.host);
//Return '/default.htm'
console.log(q.pathname);
//Return '?year=2017&month=february'
console.log(q.search);

//Return an object: {year:2017, month:'february'}
var qdata = q.query;
//Return 'february'
console.log(qdata.month);
