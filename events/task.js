const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0,
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  // eventCounts["user-login"] += 1;
});

emitter.on("user-purchase", (username, product) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased a ${product}`);
  // eventCounts["user-purchase"] += 1;
});

emitter.on("profile-update", (username) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their profile!`);
  // eventCounts["profile-update"] += 1;
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out`);
  // eventCounts["user-logout"] += 1;
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("user-login", "Naruto");
emitter.emit("user-purchase", "Naruto", "Ramen");
emitter.emit("profile-update", "Naruto", "email");
emitter.emit("user-logout", "Naruto");
emitter.emit("summary");
