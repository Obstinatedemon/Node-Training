const exportJS = require("./exportJS");
const secondExportJS = require("./exportFolder/secondExportJS");
console.log("firstObj- "+JSON.stringify(exportJS.firstObj))
exportJS.firstMethod();
secondExportJS.secondMethod();