exports.getDirFiles = function (thisDir) {
    const fs = require("fs")
    try {
        const arrayOfFiles = fs.readdirSync(thisDir)
        return arrayOfFiles;
    } catch (e) {
        console.log(e)
    }
}