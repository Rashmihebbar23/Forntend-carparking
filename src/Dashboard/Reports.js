import React, { Component } from 'react';
import Sidebar from '../Commons/Sidebar';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from 'react-bootstrap/Table';
import { CardContent } from '@material-ui/core';
import './Parkingspace.css';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';

class Reports extends Component {
    state = {

        space: '',
        bookingData: []
    }
    componentDidMount() {
        this.getall();
        // this.activeHandler();
    }
    getall = () => {
        Axios.get("http://localhost:8080/api/getbook", { ...this.state })
            .then((get) => {
                console.log('get data', get.data);
                this.setState({
                    bookingData: get.data,

                })
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Row>
                        <div className="Product">

                            <Sidebar></Sidebar>
                        </div>
                        <div className="cardss">
                            <div className="card9">
                                <div className="root">
                                    <label>from</label>
                                    <input type="date"></input><br></br>
                                    <label>to</label>
                                    <input type="date"></input>                               
                                       <CardContent>
                                        <Table striped bordered hover size="xl" >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell type="checkbox" align="left"></TableCell>
                                                    <TableCell align="left">TotalBooking</TableCell>
                                                    <TableCell align="left">Confirmed</TableCell>
                                                      <TableCell align="left">Pending</TableCell>
                                                    <TableCell align="left">canclled</TableCell>
                                                    <TableCell align="left">Actions</TableCell>
                                                </TableRow>

                                            </TableHead>
                                            
                                        </Table>
                                    </CardContent>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>


            </React.Fragment>
        );
    }
}
export default Reports; 