import React, { Component } from "react";
import Sidebar from '../Commons/Sidebar';
import Axios from 'axios';
import moment from "moment";
import './Addparking.css';


class AddProperty extends Component {
    state = {
      valueto:moment(new Date(this.props.editdata.valueto)).format("YYYY-MM-DD HH-mm"),
      valuefrom:moment(new Date(this.props.editdata.valuefrom)).format("YYYY-MM-DD HH-mm"),
       
      rentaldays: this.props.editdata.rentaldays,
      space: this.props.editdata.space,
      paymentMethod: this.props.editdata.paymentMethod,
      totalPrice:this.props.editdata.space,
        addproperty: 'add',
        // data: [],
       
    }

    onChangeHandler = (event) => {
        this.setState({
          valueto: event.target.value
        })
    }
    onChangeHandler1 = (event) => {
        this.setState({
          valuefrom: event.target.value
        })
    }
    onChangeHandler2 = (event) => {
        this.setState({
          rentaldays: event.target.value
        })
    }
    onChangeHandler3 = (event) => {
        this.setState({
          space: event.target.value
        })
    }
    onChangeHandler4 = (event) => {
      this.setState({
        paymentMethod: event.target.value
      })
  }
  onChangeHandler5 = (event) => {
    this.setState({
      totalPrice: event.target.value
    })
}
 
    onAddHandler = () => {
        Axios.post("http://localhost:8080/api/addBook", { ...this.state })
            .then((res) => {
                console.log('add data', res);
            })
    }
    onUpdateHandler = () => {
        console.log("update", this.state);
        Axios.put("http://localhost:8080/api/updatebook", { ...this.state } )
            .then((res) => {
                console.log('[update data]', res);
              
            })
           
    }
    testdate=async(event)=>{
      await this.changeHandler2(event)
  
      const valuefrom = new Date(this.state.props.editdata.valuefrom);
      const valueto=  new Date(this.state.props.editdata.valueto);
      if(valuefrom!="Invalid Date" && valueto!="Invalid Date"){
        const minus= (-valueto.getTime()+ valuefrom.getTime())/(1000*3600*24);
        await this.setState((prev,props)=>({
   

          formControls: {
            ...this.state.props.editdata,
            ["rentaldays"]: {
              ...this.state.props.editdata["rentaldays"],
              value:minus
            }}
           
        }))
       
        setTimeout(() => {
          let input= document.getElementById('rental');
          input.value = this.state.formControls.rentaldays.value;
          console.log("value",this.state.formControls.rentaldays)
        }, 5);
    
      }
    }
    
    render() {
        let Button = null;
        if (this.props.editdata.length === 0) {
            Button = (
                <button className="btn btn-sm" type="button" onClick={() => this.onAddHandler()
                }> Add</button >
            )
        }
        else {
            Button = (
                < button className="btn btn-sm" type="button" onClick={() => this.onUpdateHandler()
                }> Edit</button >
            )
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" >
                        <div className="property">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="card1">
                            {/* <div className="block"> */}
                            <label>valueto:</label>
                            <input className="block" type="datetime-local" value={this.state.valueto} onChange={this.onChangeHandler} /><br />
                            <label>valuefrom:</label>
                            <input className="block" type="datetime-local" value={this.state.valuefrom} onChange={this.onChangeHandler1} /> <br />
                            <label>rentaldays:</label>
                            <input className="block" type="text" id="rental" value={this.state.rentaldays} onChange={this.onChangeHandler2} /><br />
                            <label>space:</label>
                            <input className="block" type="text" value={this.state.space} onChange={this.onChangeHandler3} /><br />
                            <label>paymentMethod:</label>
                            <input className="block" type="text" value={this.state.paymentMethod} onChange={this.onChangeHandler3} /><br />
                            <label>totalPrice:</label>
                            <input className="block" type="text" value={this.state.totalPrice} onChange={this.onChangeHandler3} /><br />
                            {Button}

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </React.Fragment>
        )
    }
}



export default AddProperty;