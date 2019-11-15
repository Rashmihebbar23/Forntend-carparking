import React, { Component } from "react";
import Sidebar from '../Commons/Sidebar';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { CardContent } from "@material-ui/core";
import {Link} from 'react-router-dom';

import "./Clients.css";
class Clients extends Component {
  constructor() {
    super();
  }
  state = {
    formControls: {
      name: { value: "" },
      email: { value: "" },
      phone_number:{value:""},
      city: { value: "" },
      model: { value: "" },
      registration_number: { value: "" },
      client_name: { value: "" }
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
      name: this.state.formControls.name.value,
      email: this.state.formControls.email.value,
      phone_number: this.state.formControls.phone_number.value,
      city: this.state.formControls.city.value,
      model: this.state.formControls.model.value,
      registration_number: this.state.formControls.registration_number.value,
      client_name:this.state.formControls.client_name.value
    };

    axios.post("http://localhost:8080/api/addclient", tempObj).then(post => {
      console.log("post data", post);
    });
  };

    render() {
         return (
      <React.Fragment>
          <div className="container">
          <Row>
          <div className="Product">
    <Sidebar></Sidebar>
         </div>
          <div className="card5">
            <div className="card-body">
            <nav className="navbar navbar-expand-sm bg-light">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      {/* <a class="nav-link" href="#">Booking</a> */}
                    </li>
                    <li class="nav-item">
                    <Link to={{'pathname':'/Addbooking'}}>Booking</Link>
                    </li>
                  </ul>
                </nav>
            
                <label>Name</label>
                <input 
                  type="text"
                  className="block"
                   name="name"
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
                <br />
                <label>email</label>
                <input
                  type="text"
                  className="block"
                  name="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>phone_number</label>
                <input
                  type="text"
                  className="block"
                  name="phone_number"
                  value={this.state.phone_number}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>city</label>
                <input
                  type="text"
                  className="block"
                  name="city"
                  value={this.state.city}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>model</label>
                <input
                  type="text"
                  className="block"
                  name="model"
                  value={this.state.model}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>registration_number</label>
                <input
                  type="text"
                  className="block"
                  name="registration_number"
                  value={this.state.registration_number}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                
                <label>client_name</label>
                <input
                  type="text"
                  className="block"
                  name="client_name"
                  value={this.state.client_name}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <button type="button" className="buttons"  onClick={this.PostHandler}>Add</button>
                <button type="button" className="buttons"  onClick={this.PostHandler}>Cancle</button>
    </div>
  </div>
  </Row>
   </div>
      </React.Fragment>

    );

  }
}

export default Clients;