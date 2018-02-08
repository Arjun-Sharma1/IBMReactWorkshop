var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

var messages = [];

io.on('connection', function(socket) {

  console.log('User ' + socket.id + ' has connected');


  socket.on('connected', function() {
    console.log("New User Connected, sending messages list")
    socket.emit('serverResponse', {message: messages});
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('message', function(user, msg) {
    console.log(user+": "+msg);
    messages.push(user+": "+msg);
    console.log(messages);
    //Send this message to everyone thats connected
    io.local.emit('serverResponse', {message: messages});
  });

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
