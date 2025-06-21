const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (userName) => {
  console.log(`Hello ${userName}`);
});

emitter.emit("greet", "Naruto");
