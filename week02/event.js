const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// define an event listener
myEmitter.on("event-name", callbackFunction);

// emit an event with an optional data payload
myEmitter.emit("event-name", payload);