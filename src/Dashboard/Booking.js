import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CardContent } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import './Parkingspace.css';

import Axios from 'axios';
import Addbooking from './Addbooking';

import Sidebar from '../Commons/Sidebar';



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
      editdata: [],
      dataFilter:[],
      addproperty: 'add',
    };

    onAddHandler = () => {
        Axios.post("http://localhost:8080/api/addBook", { ...this.state })
            .then((res) => {
                console.log('add data', res);
            })
    }

    componentDidMount() {
        this.onGetHandler();
        // this.activeHandler();

    }
    onGetHandler = () => {
        Axios.get("http://localhost:8080/api/getbook", { ...this.state })
            .then((res) => {
                console.log('get data', res);
                this.setState({
                      bookingData: res.data
                },()=>this.activeHandler('All'))
            })
    }

    onUpdateHandler = (data) => {

        this.setState({
            edit: data,
            addproperty: 'editform'
        })
        // Axios.put("http://localhost:9090/api/updateproperty", { ...this.state })
        //     .then((res) => {
        //         console.log('[update]', res);
        //     })
    }

    onDeleteHandler = (id) => {
        Axios.delete("http://localhost:8080/api/deleteBook/" + id)
            .then((res) => {
                console.log('delete', res);
                this.onGetHandler();
            })
    }

    activeHandler = (res) => {
      switch (res) {
        case 'confirmed': {
          this.setState({
            filter: 'yes',
            dataFilter: this.state.bookingData.filter((res) => res.status === 'confirmed')
           
          })
          console.log('confirmed', res);
          break;
        }
         
        case 'canclled': {
          this.setState({
            filter: 'yes',
            dataFilter: this.state.bookingData.filter((res) => res.status === 'canclled')
          })
          break;
        }
          case 'All': {
            this.setState({
              filter:'yes',
              dataFilter:this.state.bookingData
            })
          }
        }
    }
    onAddpropertyHandler = (data) => {
        console.log('data', data)
        this.setState({
            addproperty: data,
            edit: []
        })
    }


    render() {
        if (this.state.addproperty === 'add') {

            return (
                <React.Fragment>
                   <div className="container">
            <Row>
  <div className="Product">
    <Sidebar></Sidebar>
         </div>
         <div className="cards1">
             <div className="card9">
           <div className="root">
           <CardContent>
            <button className="fa fa-plus-circle" style={{margin:"10px",float:"left"}} onClick={() => this. onAddpropertyHandler('form')}>Addbooking</button>
            <button className="btn btn-sm" type="button" onClick={()=> this.activeHandler('All')}>ALL</button>
            {/* <div className="input-icons"/> 
            <i className="fa fa-search icon" style={{float:"right"}}></i> 
            <input type="text"  placeholder="Search" /> 
  */}
  {/* <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      Select Category</button>
   */}
  

    <Table striped bordered hover size="xl" >
      <TableHead>
        <TableRow>
        <TableCell type="checkbox" align="left"></TableCell>
          <TableCell align="left">valuefrom</TableCell>
          <TableCell align="left">valueto</TableCell> 
          <TableCell align="left">space</TableCell>
          <TableCell align="left">name</TableCell>
          <TableCell align="left">Status</TableCell>
           <TableCell align="left">Actions</TableCell> 
       </TableRow>
      </TableHead>
      <TableBody>
        {
            this.state.dataFilter.map((row, index) => (
          <TableRow key={index}>
          <input type="checkbox"></input>
            <TableCell scope="row">
              {row.valuefrom}
            </TableCell>
             <TableCell align="left">{row.valueto}</TableCell>
             <TableCell align="left">{row.space}</TableCell>
             <TableCell align="left">{row.client.name}</TableCell>
             <TableCell align="left">{row.status}</TableCell> 
           <TableCell>
            <button className="fa fa-edit" style={{margin:"10px"}} onClick={() => this.onUpdateHandler(row)}></button>
            {/* <button className="fa fa-trash" style={{margin:"10px"}} onClick={()=>this.DeleteHandler(row.id)}></button> */}
            <button className="fa fa-trash" style={{margin:"10px"}} 
            onClick={() =>window.confirm("want to delete?") && this.onDeleteHandler(row.booking_id)}></button>
            </TableCell>
            </TableRow>
        ))}
      </TableBody>
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
        else if (this.state.addproperty === 'form') {
          console.log("data", this.state.edit)
          return (
             
              <Addbooking editdata={this.state.edit}></Addbooking>
             
          );
      }
      else if (this.state.addproperty === 'editform') {
          return (

              <Addbooking editdata={this.state.edit}> </Addbooking>
          );

      }
  }
       
}

export default Booking;
