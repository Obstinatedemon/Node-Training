const fs = require('fs');

fs.readFile('./Modules/readFile.txt','utf8',(err,data)=>{
    console.log(err, data);
})

fs.writeFile('./Modules/firstWrittenFile.txt',"This is a first written file", ()=>{
    console.log("file written");
})

console.log("End");

