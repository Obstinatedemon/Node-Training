const fs = require('fs');

const readFileData = fs.readFileSync('./Modules/readFile.txt');
console.log(readFileData.toString());

const writeFileData = fs.writeFileSync('./Modules/secondWrittenFile.txt',"This is second written file");

console.log("End");