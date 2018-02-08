import React, { Component } from 'react';
import io from 'socket.io-client';
var socket = io('http://localhost:8000');
var localUser='';

class app extends Component {
  constructor(props) {
    super(props);
    //TODO: Create state variable for message being sent and messageList that was retrived from server

    //Binds the functions below to be able to access variables in this object
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    socket.emit("connected");
  }

  handleChange(event) {
    //Used to dynamically update fields such as textboxes, radio buttons etc.
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.message);
    //TODO: Send message to server using socket,io

    //Stop from refreshing the page
    event.preventDefault();
  }

  render() {
    //TODO: Handle messages retrived from socket.io

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Write a message to Everyone!</h1>
        </header>
        //TODO: Dynamically update messages view that was retrieved from server

        //TODO: Add textbox field for adding a new message and submit button

      </div>
    );
  }
}


function setLocalUser(username) {
  localUser = username;
};

export {setLocalUser};
export default app;
