const fs = require('fs');
const appendFile = function () {
  fs.writeFileSync('notepad.txt', 'i am omar correa');

}


module.exports = appendFile;


