import React, { Component } from 'react';
import { setLocalUser } from './app.js';

class landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.name);
    setLocalUser(this.state.name);
    //Stop from refreshing the page
    event.preventDefault();
    //Redirect to chat page
    this.props.history.push('/chat');
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose Your Name!</h1>
        </header>
        <div>
          <form id="form1" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input className='textBox' id="name" name='name' value={this.state.message} placeholder="Type your name"/>
              <br></br>
          </form>
          <button onClick={this.handleSubmit}>Submit Name</button>
        </div>
      </div>
    );
  }
}

export default landing;
