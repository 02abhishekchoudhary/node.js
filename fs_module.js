const fs = require("fs");

const fileName = "test.txt";
const writeFile = fs.writeFileSync(fileName, "Fs module in Node js", "utf-8");
console.log(writeFile);

const readFile = fs.readFileSync();
