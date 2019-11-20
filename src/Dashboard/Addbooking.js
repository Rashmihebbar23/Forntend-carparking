import React, { Component } from "react";
import Sidebar from '../Commons/Sidebar';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { CardContent } from "@material-ui/core";
import {Link} from 'react-router-dom';

import "./Addbooking.css";
import moment from "moment";
class Addbooking extends Component {
  constructor() {

    super();
  }
  componentDidUpdate(){
    
  }
  state = {
    formControls: {
        valueto: { value: "" },
        valuefrom: { value: "" },
        rentaldays:{value:""},
        space: { value: "" },
        paymentMethod: { value: "" },
        // status:this.props.editdata.status,
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
   return new Promise((resolve,reject)=>{
      resolve(true)
    })
  };
  testdate=async(event)=>{
    await this.changeHandler(event)

    const valuefrom = new Date(this.state.formControls.valuefrom.value);
    const valueto=  new Date(this.state.formControls.valueto.value);
    if(valuefrom!="Invalid Date" && valueto!="Invalid Date"){
      const minus= (-valueto.getTime()+ valuefrom.getTime())/(1000*3600*24);
 await this.setState((prev,props)=>({
   
      formControls: {
        ...this.state.formControls,
        ["rentaldays"]: {
          ...this.state.formControls["rentaldays"],
          value:minus

        }
      }
    }))
   
    setTimeout(() => {
      let input= document.getElementById('rental');
      input.value = this.state.formControls.rentaldays.value;
      console.log("value",this.state.formControls.rentaldays)
    }, 5);
 debugger
    // document.getElementById('rental')
   
    }
    
  }
  PostHandler = () => {
    console.log("state", this.state);

    let tempObj = {
        valueto: moment(new Date(this.state.formControls.valueto.value)).format("YYYY-MM-DD HH-mm"),
        valuefrom:moment(new Date(this.state.formControls.valuefrom.value)).format("YYYY-MM-DD HH-mm"),
        rentaldays: this.props.editdata.rentaldays,
        space: this.state.formControls.space.value,
        paymentMethod: this.state.formControls.paymentMethod.value,
        // status: this.state.formControls.status.value,
        totalPrice:this.state.formControls.totalPrice.value,
        // here am calling props
        // status:this.props.state.formControls.editdata.status,
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
                  type="datetime-local"
                  className="block"
                   name="valueto"
                  value={this.state.valueto}
                  onChange={this.testdate}
                />
                <br />
                <label>valuefrom</label>
                <input
                  type="datetime-local"
                  className="block"
                  name="valuefrom"
                  value={this.state.valuefrom}
                  onChange={this.testdate}
                  required
                />
                <br />
                <label>rentaldays</label>
                <input
                 
                  className="block"
                  name="rentaldays"
                  id="rental"
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