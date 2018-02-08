var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

var messages = [];

io.on('connection', function(socket) {

  console.log('User ' + socket.id + ' has connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  //TODO: On user connection, send all messages currently stored on server
  //Hint socket.emit() sends data only to client;


  //TODO: When message recieved, store into messageList and broadcast to all connected clients
  //Hint io.local.emit() sends data to call clients;


});

/* Heroku Assigns an arbitary port to App using process.env.PORT
   If no port assigned, we use port 8000 for local backend server.
   Express is used to serve the static files since we cannot use
   two ports on Heroku. React uses port 3000 for a dynamic development server
   which we do not need in production
*/
const port =process.env.PORT || 8000;
if(port !== 8000){
  console.log("Using production Build");
  app.use(express.static('build'));
}

server.listen(port);

console.log('listening on port ', port);
