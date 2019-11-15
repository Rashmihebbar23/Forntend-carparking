import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

import "./Register.css";

class Register extends Component {
  constructor() {
    super();
  }
  state = {
    formControls: {
        username: { value: "" },
        status: { value: "" },
        role: { value: "" },
        email: { value: "" },
      password: { value: "" },
      confirmpassword: { value: "" }
    }
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };
  PostHandler = () => {
    console.log("state", this.state);

    let tempObj = {
      username: this.state.formControls.username.value,
      status: this.state.formControls.status.value,
      role: this.state.formControls.role.value,
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      confirmpassword: this.state.formControls.confirmpassword.value
    };

    axios.post("http://localhost:8080/user/adduser", tempObj).then(post => {
      console.log("post data", post);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card>
            <CardContent>
              <form>
                <h1>Register</h1>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={this.state.username}
                  onChange={this.changeHandler}
                />
                <br />
                <label>firstname</label>
                <input
                  type="text"
                  placeholder="Enter status"
                  name="status"
                  value={this.state.status}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>lastname</label>
                <input
                  type="text"
                  placeholder="Enter role"
                  name="role"
                  value={this.state.role}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>Confirm password</label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  value={this.state.confirmpassword}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <button type="button" onClick={this.PostHandler}>
                  Register
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
