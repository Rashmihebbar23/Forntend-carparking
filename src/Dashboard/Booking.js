import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Search from './Search';

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
import { Link } from 'react-router-dom';
import Editbooking from './Editbooking';
import { statement } from '@babel/template';


// import Row from 'react-bootstrap/Row';

class Booking extends Component {
  constructor() {
    super();
  }
  state = {
    booking_id: '',
    valuefrom: '',
    valueto: '',
    space: '',
    name: '',
    Status: '',
    data: [],
    BookingData: [],
    filter: '',
    filterproduct: [],
    getvalue: '',
    editdata: []

  };
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
          filter: 'none'
        })
      })
  }
  onUpdateHandler = (put) => {
    // Axios.put("http://localhost:8080/api/updatebook", {...this.state})
    // .then((put)=>{
    this.setState({
      // array of data
      edit: put,
      filter: 'editform'
    })
    // })
  }

  onDeleteHandler = (id) => {
    Axios.delete("http://localhost:8080/api/deleteBook/" + id)
      .then((del) => {
        console.log('delete', del);
      })
  }

  activeHandler = (res) => {
    switch (res) {
      case 'active': {
        this.setState({
          filter: 'yes',
          data: this.state.bookingData.filter((res) => res.status === 'active')
        })
        break;
      }

      case 'inactive': {
        this.setState({
          filter: 'yes',
          data: this.state.bookingData.filter((res) => res.status === 'inactive')
        })
        break;
      }
      case 'all': {
        this.setState({
          filter: 'yes',
          data: this.state.bookingData
        })
      }
    }
  }

  HandleInput = (e) => {

    this.setState({ getvalue: e.target.value })
    console.log("get the input datataatatat", this.state.getvalue);
if(this.state.getvalue!==null)
{
    const updatedList = this.state.bookingData.filter(item => {

      console.log("entered dtatassssss", item.status)

      if (item['status'] !== undefined) {
        return (
          item['status'].toLowerCase().includes(this.state.getvalue.toLowerCase())
        );
      }

    });
    this.setState({ bookingData: updatedList });

  }
  }

  render() {
    let tableBody = null;
    if (this.state.filter === 'none') {
      tableBody = (
        this.state.bookingData.map((row, index) => (
          <TableRow key={index}>
            <input type="checkbox"></input>
            <TableCell component="th" scope="row">
              {row.valuefrom}
            </TableCell>
            {/* <TableCell align="right">{row.paymentMethod}</TableCell> */}
            <TableCell >{row.valueto}</TableCell>
            <TableCell >{row.space}</TableCell>
            <TableCell>{row.client.name}</TableCell>
            <TableCell >{row.status}</TableCell>
            <TableCell>{row.actions}

              <button className="fa fa-edit ic" onClick={() => this.onUpdateHandler(row)}></button>
              <button className="fa fa-trash ic" onClick={() => this.onDeleteHandler(row.booking_id)}></button>
            </TableCell>

          </TableRow>
        ))
      )
    }
    else if (this.state.filter === 'yes') {
      tableBody = (
        this.state.data.map((row, index) => (
          <TableRow key={index}>
            <input type="checkbox"></input>
            <TableCell component="th" scope="row">
              {row.valuefrom}
            </TableCell>
            {/* <TableCell align="right">{row.paymentMethod}</TableCell> */}
            <TableCell >{row.valueto}</TableCell>
            <TableCell >{row.space}</TableCell>
            <TableCell>{row.client.name}</TableCell>
            <TableCell >{row.status}</TableCell>
            <TableCell>{row.actions}

            </TableCell>

          </TableRow>
        ))
      )
    }
    // writing that if else statement and taking selector of that component
    else if (this.state.filter === 'editform') {
      return (
        <Editbooking editdata={this.state.edit}></Editbooking>
      )
    }

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
                      <a class="nav-link" href="#">Booking</a>
                    </li>
                  </ul>
                </nav>
                <div class="alert alert-info alert-dismissible">
                  <button type="button" class="close" style={{ position: "absolute", top: "-4px", right: "-13px" }} data-dismiss="alert">&times;</button><strong>Booking!</strong> Below you can find a list with all bookings made. You can sort, filter, delete and edit them..
  </div>
                <button type="button" onClick={() => this.activeHandler('active')}>active</button>
                <button type="button" onClick={() => this.activeHandler('inactive')}>inactive</button>
                <button type="button" onClick={() => this.activeHandler('all')}>all</button>
                <button className="fa fa-plus-circle" style={{ margin: "10px", float: "left" }} onClick={this.row}><Link to={{ 'pathname': '/Addbooking' }}>Add Booking</Link></button>
                <Search input type="text" InputHandler={(e) => this.HandleInput(e)} className="fa fa-search" style={{ margin: "10px", float: "left" }}></Search>
                {/* <input type="text" className="fa fa-search" style={{ margin: "10px", float: "left" }} onClick={this.row}></input> */}
                <div className="root">
                  {/* <CardContent> */}

                  <Table className="root1" striped bordered hover size="md">
                    <TableHead>
                      <TableRow>
                        <TableCell type="checkbox" align="right"></TableCell>
                        <TableCell align="right">valuefrom</TableCell>
                        <TableCell align="right">valueto</TableCell>
                        <TableCell align="right">space</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableBody}
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