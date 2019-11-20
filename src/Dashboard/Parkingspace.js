import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Parkingspace.css';
import Axios from 'axios';
import Sidebar from '../Commons/Sidebar';
import { CardContent } from '@material-ui/core';
import Row from 'react-bootstrap/Row';

import Addparking from './Addparking';


class Praking extends Component {
    constructor() {
        super();

    }
    state = {
        parking_id: '',
        name: '',
        description: '',
        aviliablenow: '',
        price_today:'',
        status:'',
        addproperty: 'add',
        edit: [],
        data: [],
        filter: ''
    };

    onAddHandler = () => {
        Axios.post("http://localhost:8080/api/addspace", { ...this.state })
            .then((res) => {
                console.log('add data', res);
            })
    }

    componentDidMount() {
        this.onGetHandler();
        // this.activeHandler();

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
        Axios.delete("http://localhost:8080/api/deletespace/" + id)
            .then((res) => {
                console.log('delete', res);
                this.onGetHandler();
            })
    }

    
    onAddspaceHandler = (data) => {
        console.log('data', data)
        this.setState({
            addproperty: data,
            edit: []
        })
    }


    render() {
        if (this.state.addproperty === 'add') {
return(
           
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
            <button className="fa fa-plus-circle" style={{margin:"10px",float:"left"}} onClick={() => this. onAddspaceHandler('form')}>
            Add Space</button>
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
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Available now</TableCell>
          
          <TableCell align="left">Price today</TableCell>
          <TableCell align="left">Status</TableCell>
           <TableCell align="left">Actions</TableCell> 
       </TableRow>
      </TableHead>
      <TableBody>
        {
            this.state.data.map((row, index) => (
          <TableRow key={index}>
          <input type="checkbox"></input>
            <TableCell scope="row">
              {row.name}
            </TableCell>
             <TableCell align="left">{row.availablenow}</TableCell>
             <TableCell align="left">{row.price_today}</TableCell>
            
            <TableCell align="left">
               <select>
            <option value="Active">Active</option>
            <option value="inactive">inactive</option>
              </select>
            </TableCell> 
           <TableCell>
            <button className="fa fa-edit" style={{margin:"10px"}} onClick={() => this.onUpdateHandler(row)}></button>
            {/* <button className="fa fa-trash" style={{margin:"10px"}} onClick={()=>this.DeleteHandler(row.id)}></button> */}
            <button className="fa fa-trash" style={{margin:"10px"}} 
            onClick={() =>window.confirm("want to delete?") && this.onDeleteHandler(row.product_id)}></button>
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
               
                <Addparking editdata={this.state.edit}></Addparking>
               
            );
        }
        else if (this.state.addproperty === 'editform') {
            return (

                <Addparking editdata={this.state.edit}> </Addparking>
                )

            }
        }
        
        
        }

export default Praking;