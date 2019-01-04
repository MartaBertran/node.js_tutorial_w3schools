//THE EventEmitter OBJECT

//Node.js has a built-in module called "Events" where you can:
//*create-
//*fire-
//*listen for-
//your own events.

//To include the built-in Events module use the require() method
var events = require('events');
//All event properties and methods are an instance of an EventEmitter object 
//Create an EventEmitter object in order to access these properties and methods
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
