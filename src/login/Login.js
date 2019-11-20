

import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
class Login extends Component {
  constructor() {
    super();
    // this.state = {
    //   username: '',
    //   password: '',
    // };
  }

  state = {
    username: '',
    password: '',
  };

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  PostHandler = () => {
    console.log('state',this.state)
    axios.post("http://localhost:8080/login/generate-token",{...this.state})
      .then((res) => {
        console.log('post data', res);
        // localStorage.setItem("token", res.token)
        // this.setState({
        // })

      })
  }
  handleUserChange(event) {
    event.persist()
    console.log(event);
    this.setState({
      username: event.target.value,
    });
  };

  handlePassChange(event) {
    console.log(event)
    this.setState({
      password: event.target.value,
    });
  }


  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <Card>
      <div className="login">
       
<CardContent>
        <form>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange.bind(this)} />
          <br></br>
          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange.bind(this)} />
          <br></br>
          <button type="button" onClick={this.PostHandler}> Log In </button>
          
        </form>
        </CardContent>
        

      </div>
      </Card>
    );
  }
}
export default Login;