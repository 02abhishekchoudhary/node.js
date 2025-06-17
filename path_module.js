const path = require("path");

console.log(__dirname);
console.log(__filename);

// school folder / students / data.txt

const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const basename = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({ parseData, resolvedPath, extName, basename, dirName });
