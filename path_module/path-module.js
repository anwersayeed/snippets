
const path = require('path');

// prints basename for below address, here myfile.html
console.log(path.basename('C:\\temp\\myfile.html'));

// prints dirname for below address, here C:\temp
console.log(path.dirname('C:\\temp\\myfile.html'));

// returns extension for the file, like html or pdf etc
console.log(path.extname('C:\\temp\\myfile.html'));

// returns extension for the file, here .js
console.log(path.extname(__filename));