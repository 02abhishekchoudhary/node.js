const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0,
};

emitter.on("user-login", (username) => {
  console.log(`${username} logged in!`);
  eventCounts["user-login"] += 1;
});

emitter.on("user-purchase", (username, product) => {
  console.log(`${username} purchased a ${product}`);
  eventCounts["user-purchase"] += 1;
});

emitter.on("profile-update", (username) => {
  console.log(`${username} updated their profile!`);
  eventCounts["profile-update"] += 1;
});

emitter.on("user-logout", (username) => {
  console.log(`${username} logged out`);
  eventCounts["user-logout"] += 1;
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("user-login", "Naruto");
emitter.emit("user-purchase", "Naruto", "Ramen");
emitter.emit("profile-update", "Naruto", "email");
emitter.emit("user-logout", "Naruto");
emitter.emit("summary");
