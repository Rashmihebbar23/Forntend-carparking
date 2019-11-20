import React, { Component } from "react";


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
                                            
                                            <i className="col-sm-3 fa fa-car">Space occupied today<p>{this.state.data.length}</p></i>
                                            <i className="col-sm-3 fa fa-car"><p>{this.state.data.length}</p></i>
                                            <i className="col-sm-3 fa fa-car"><p>{this.state.data.length}</p></i>
                                        </div>
                                                                   
                                    <div className="row">
                                    <div className="col-sm-3 cards">Latest Booking</div>
                                    <div className="col-sm-3 cards">Latest Booking1</div>
                                        {/* <div class="dashboard_row">							
								<label>Name:</label>
								<br></br>
								<label>Model:</label>
                                <br></br>
								<label>Registration:</label>
                                <br></br>
								<label>Days</label>							
                                </div> */}
                                        </div>
                                       
                                        {/* <div className="row"> */}
                                   
</div>
                            </div>
                            </div>
                         
                     
        
         
            </React.Fragment>
        )
    }

}
export default Dashboard;