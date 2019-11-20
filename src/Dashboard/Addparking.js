import React, { Component } from "react";
import Axios from 'axios';
import Sidebar from '../Commons/Sidebar';
import './Addparking.css';


class AddProperty extends Component {
    state = {

        name: this.props.editdata.name,
        description: this.props.editdata.description,
        aviliablenow: this.props.editdata.aviliablenow,
        parking_id:this.props.editdata.parking_id,
        price_today:this.props.editdata.price_today,
        addproperty: 'add'
    }

    onChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    onChangeHandler1 = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    onChangeHandler2 = (event) => {
        event.persist();
        this.setState({
            aviliablenow: event.target.value
        })
    }
    onChangeHandler3 = (event) => {
        this.setState({
            price_today: event.target.value
        })
    }
    onAddHandler = () => {
        Axios.post("http://localhost:8080/api/addspace", { ...this.state })
            .then((res) => {
                console.log('add data', res);
            })
    }
    onUpdateHandler = () => {
        Axios.put("http://localhost:8080/api/updatespace", { ...this.state })
            .then((res) => {
                console.log('[update]', res);
            })
    }
    render() {


        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" >
                        <div className="property">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="card1">
                            <div className="card-body">
                            {/* <div className="block"> */}
                            <label>Property Name:</label>
                            <input className="block" type="text" className="block" value={this.state.name} onChange={this.onChangeHandler} /><br />
                            <label>description:</label>
                            <input className="block" type="text" className="block" value={this.state.description} onChange={this.onChangeHandler1} /> <br />
                            <label>aviliablenow:</label>
                            <input className="block" type="text" className="block" value={this.state.aviliablenow} onChange={this.onChangeHandler2} /><br />
                            <label>price_today:</label>
                            <input className="block" type="text" value={this.state.price_today} onChange={this.onChangeHandler3} /><br />

                            <button className="btn btn-sm" type="button"  onClick={() => this.onAddHandler()}>Add</button>
                            <button className="btn btn-sm" type="button" onClick={() => this.onUpdateHandler()}>Edit</button>

                        </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </React.Fragment>
        )

    }
}


export default AddProperty;