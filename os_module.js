const os = require("os");

console.log("Platform:", os.platform());
console.log("User:", os.userInfo());
console.log("CPU Architecture:", os.arch());
console.log("Free memory:", os.freemem(), "bytes");
console.log("Total memory:", os.totalmem(), "bytes");
console.log("System uptime:", os.uptime(), "seconds");
console.log("Home directory:", os.homedir());
console.log("Host Name:", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("CPU Info:", os.cpus());
console.log("Temprory directory:", os.tmpdir());
console.log("Operating system:", os.type());
