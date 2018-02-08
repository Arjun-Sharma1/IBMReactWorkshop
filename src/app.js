import React, { Component } from 'react';
import io from 'socket.io-client';
var socket = io('http://localhost:8000');
var localUser='';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messagesList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    socket.emit("connected");
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.message);
    socket.emit("message", localUser, this.state.message);
    //Stop from refreshing the page
    event.preventDefault();
  }

  render() {
    socket.on('serverResponse', function(response) {
      this.setState({messagesList:response.message});
    }.bind(this));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Write a message to Everyone!</h1>
        </header>
        <ul>
          {this.state.messagesList.map(function(listValue,index) {
            return <p key={index}>{listValue}</p>;
          })}
        </ul>
        <div>
          <form id="form1" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input className='textBox' id="message" name='message' value={this.state.message} placeholder="Type a Message"/>
              <br></br>
          </form>
          <button onClick={this.handleSubmit}>Send Message</button>
        </div>
      </div>
    );
  }
}

function setLocalUser(username) {
  localUser = username;
};

export {setLocalUser};
export default app;
