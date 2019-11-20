import React, { Component } from "react";
import Sidebar from '../Commons/Sidebar';

import './Editbooking.css';
class Editbooking extends Component{

state = {
    valueto:this.props.editdata.valueto,
    valuefrom:this.props.editdata.valuefrom,
    rentaldays:this.props.editdata.rentaldays,
    space:this.props.editdata.space,
    paymentMethod:this.props.editdata.paymentMethod,
    status:this.props.editdata.status,


}

onChangeHandler = () => {
    
} 
render(){
    return(
        <React.Fragment>
        <div className="container">
             <div className="row" >
                 <div className="property">
                     <Sidebar></Sidebar>
                 </div>

                 <div className="card1">
                     {/* <div className="block"> */}
                      <label>valueto:</label>
          <input className="block" type="text"  value={this.state.valueto}></input><br/>
          <label>valuefrom:</label>
          <input  className="block" type="text"  value={this.state.valuefrom}></input> <br/>
          <label>rentaldays:</label>
          <input className="block" type="text"  value={this.state.rentaldays}></input><br/>
          <label>space:</label>
          <input className="block" type="text"  value={this.state.space}></input><br/>
          <label>paymentMethod:</label>
          <input className="block" type="text"  value={this.state.paymentMethod}></input><br/>
          <label>status:</label>
          <input className="block" type="text"  value={this.state.status}></input><br/>
          
          <button className="btn btn-sm" type="button" >Edit</button>
         
          </div>
      </div>
{/* </div> */}
</div>
     </React.Fragment>
    )
}
}

export default Editbooking;
