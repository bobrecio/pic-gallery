const getDirFilesByExt = (thisDir, _byExt) => {
  console.log(_byExt);

  const fs = require("fs");
  let extFiles = [];

  try {
    const arrayOfFiles = fs.readdirSync(thisDir);
    extFiles = arrayOfFiles.filter(function(val,idx){
      return val.indexOf(_byExt) >= 0;
    })
    return extFiles;
  } catch (e) {
    console.log(e);
  }
}

const getAllFiles = (dirPath, arrayOfFiles) => {
  const fs = require("fs");
  const path = require("path");
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = exports.getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}