const validator = require('validator');

const appendFile = require('./server.js');
appendFile();

console.log(validator.isEmail('omarcorrea378@yahoo.com'))
console.log(validator.isEmail('omarcorrea378@yfoo'))