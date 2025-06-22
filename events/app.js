const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (userName, role) => {
  console.log(`Hello ${userName}, You are ${role} of konoha`);
});

emitter.emit("greet", "Naruto", "Hokage");
