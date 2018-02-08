import React, { Component } from 'react';
import { setLocalUser } from './app.js';

class landing extends Component {
  constructor(props) {
    super(props);
    //TODO: Create state variables for name

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    //TODO:Add Local User

    //Stop from refreshing the page
    event.preventDefault();

    //TODO: Redirect to chat page

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose Your Name!</h1>
        </header>
        //TODO: Add textbox and submit button for name
      </div>
    );
  }
}

export default landing;
