import React, { Component } from "react";

import './Dashboard.css'
import Sidebar from "../Commons/Sidebar";
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
class Dashboard extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.onGetHandler();
    }

    onGetHandler = () => {
        Axios.get("http://localhost:8080/api/getSpace", { ...this.state })
            .then((res) => {
                console.log('get data', res);
                this.setState({
                    data: res.data
                })

            })
    }
    render() {
        return (
            <React.Fragment>
<div className="container">
                    <div className="row">
                        <div className="Product">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="card">

                            <div className="row">
                                <div className="col-4">

                                    <div className="column">
                                        <div className="card">
                                            {/* className="fa fa-pinterest-square icons" */}
                                            <strong >Space occupied today</strong><br />

                                            <i class="fa fa-car"><p>{this.state.data.length}</p></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="column">
                                        <div className="card">
                                            {/* className="fa fa-pinterest-square icons" */}
                                            <strong >Space occupied today</strong><br />
                                            {/* <i class="fa fa-car"><p>{this.state.data.length}</p></i> */}
                                            <i class="fa fa-car"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="column">
                                        <div className="card">
                                            {/* className="fa fa-pinterest-square icons" } */}
                                            <strong >Space occupied today</strong><br />

                                            <i class="fa fa-car"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="card">
                                        <div class="dashboard_row">							
								<label>Name:</label>
								<br></br>
								<label>Model:</label>
                                <br></br>
								<label>Registration:</label>
                                <br></br>
								<label>Days</label>							
                                </div>
                                        </div>
                                        </div></div>

                            </div>

                            <div className="card1">

                            </div>
                        </div>
                    </div>
                </div>
         
            </React.Fragment>
        )
    }

}
export default Dashboard;