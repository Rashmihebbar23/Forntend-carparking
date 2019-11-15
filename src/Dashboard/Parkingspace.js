import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody'
import Paper from '@material-ui/core/Paper';
import Sidebar from '../Commons/Sidebar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Booking.css';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';


// import Row from 'react-bootstrap/Row';

class Booking extends Component {
  constructor() {
    super();
  }
  state = {
    name: '',
    aviliablenow: '',
    price_today: '',
    status: '',
    Status: '',
    data: []
  };
  componentDidMount() {
    this.getall();
  }
  getall = () => {
    Axios.get("http://localhost:8080/api/getSpace", { ...this.state })
      .then((get) => {
        console.log('get data', get.data);
        this.setState({
          data: get.data
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
            <div className="card">

              <div className="card1">

                <nav className="navbar navbar-expand-sm bg-light">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link">Parking space</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">Price</a>
                    </li>
                  </ul>
                </nav>
                <div class="alert alert-info alert-dismissible">
                  <button type="button" class="close" style={{ position: "absolute", top: "-4px", right: "-13px" }} data-dismiss="alert">&times;</button><strong>Parking space!</strong> Below you can see list of available parking space types. Add as many space types as you need.
  </div>
                <button className="fa fa-plus-circle" style={{ margin: "10px", float: "left" }} onClick={this.row}>Add Parking</button>
                <input type="text" className="fa fa-search" style={{ margin: "10px", float: "left" }} onClick={this.row}></input>
                <div className="root">
                  {/* <CardContent> */}

                  <Table className="root1" striped bordered hover size="md">
                    <TableHead>
                      <TableRow>
                        <TableCell type="checkbox" align="right"></TableCell>
                        <TableCell align="right">Name</TableCell>

                        <TableCell align="right">Occupied now</TableCell>
                        <TableCell aligh="right">Avilable now</TableCell>

                        <TableCell align="right">Price today</TableCell>

                        <TableCell align="right">Status</TableCell>
                        {/* <TableCell align="right">Status</TableCell> */}
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        this.state.data.map((row, index) => (
                          <TableRow key={index}>
                            <input type="checkbox"></input>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell >{row.occupiednow}</TableCell>
                            <TableCell align="right">{row.aviliablenow}</TableCell>
                             

                            <TableCell >{row. price_today}</TableCell>
                            <TableCell >{row.status}</TableCell>
                            <TableCell>{row.actions}
                              <button className="fa fa-edit ic" onClick={row}></button>
                              <button className="fa fa-trash ic" onClick={row}></button>
                            </TableCell>

                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  {/* </CardContent> */}
                  {/* </Card> */}
                  {/* </Paper> */}
                </div>
              </div>

            </div>
            {/* </div> */}
            {/* </Col> */}
          </Row>
          {/* </Container> */}
        </div>
      </React.Fragment>

    );

  }
}

export default Booking;