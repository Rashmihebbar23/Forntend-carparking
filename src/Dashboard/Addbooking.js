import React, { Component } from "react";
import Sidebar from '../Commons/Sidebar';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { CardContent } from "@material-ui/core";
import {Link} from 'react-router-dom';

import "./Addbooking.css";
class Addbooking extends Component {
  constructor() {
    super();
  }
  state = {
    formControls: {
        valueto: { value: "" },
        valuefrom: { value: "" },
        rentaldays:{value:""},
        space: { value: "" },
        paymentMethod: { value: "" },
        status: { value: "" },
        totalPrice: { value: "" }
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
        valueto: this.state.formControls.valueto.value,
        valuefrom: this.state.formControls.valuefrom.value,
        rentaldays: this.state.formControls.rentaldays.value,
        space: this.state.formControls.space.value,
        paymentMethod: this.state.formControls.paymentMethod.value,
        status: this.state.formControls.status.value,
        totalPrice:this.state.formControls.totalPrice.value
    };

    axios.post("http://localhost:8080/api/addBook", tempObj).then(post => {
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
          <div className="card4">
              
            <div className="card-body">
            <nav className="navbar navbar-expand-sm bg-light">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      {/* <a class="nav-link" href="#">Booking</a> */}
                    </li>
                    <li class="nav-item">
                    <Link to={{'pathname':'/Clients'}}>Client</Link>
                    </li>
                  </ul>
                </nav>
                <label>valueto</label>
                <input 
                  type="date"
                  className="block"
                   name="valueto"
                  value={this.state.valueto}
                  onChange={this.changeHandler}
                />
                <br />
                <label>valuefrom</label>
                <input
                  type="date"
                  className="block"
                  name="valuefrom"
                  value={this.state.valuefrom}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>rentaldays</label>
                <input
                  type="text"
                  className="block"
                  name="rentaldays"
                  value={this.state.rentaldays}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>space</label>
                <input
                  type="text"
                  className="block"
                  name="space"
                  value={this.state.space}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>paymentMethod</label>
                <input
                  type="text"
                  className="block"
                  name="paymentMethod"
                  value={this.state.paymentMethod}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>status</label>
                <input
                  type="text"
                  className="block"
                  name="status"
                  value={this.state.status}
                  onChange={this.changeHandler}
                  required
                />
                <br />
                
                <label>totalPrice</label>
                <input
                  type="text"
                  className="block"
                  name="totalPrice"
                  value={this.state.totalPrice}
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

export default Addbooking;