import React, { Component } from "react";


import Sidebar from "../Commons/Sidebar";
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import './Dashboard.css'
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

                        <div className="Card1">
                            <div className="row" style={{ marginBottom: "6px" }}>

                                <div className="col-sm-3 fa fa-car icon">Space occupied today<p>{this.state.data.length}</p></div>
                                <div className="col-sm-3 fa fa-car icon"><p>{this.state.data.length}</p></div>
                                <div className="col-sm-3 fa fa-car icon"><p>{this.state.data.length}</p></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 cards">Latest Booking</div>
                                <div className="col-sm-3 cards">Latest Booking1</div>
                            </div>
                        </div>
                    </div>
                    </div>
                        
                         
                     
        
         
            </React.Fragment>
                )
            }
        
        }
export default Dashboard;