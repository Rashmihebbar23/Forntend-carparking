import React,{Fragment,Suspense} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Sidebar.css';
import {Link, NavLink} from 'react-router-dom';

// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';







function Sidebar() {


  
  return (
    <React.Fragment>
        <Container>
            <Row>
                
                <Col sm={12}>
               
    {/* <Card> */}
    <div className="Sidebar">
    {/* <table className="table table-border"> */}
    <CardContent>
    {/* <hl>sidebar component</hl> */}
     
    
    <NavLink to={{'pathname':"Booking"}} activeclassname="active"></NavLink>
    <button  className="fa fa-tachometer icons"><strong style={{margin:"10px"}}></strong><Link to={{'pathname':'/dashboard'}}>Dashboard</Link></button><br/>
    <button  className="fa fa-book icons"><strong style={{margin:"10px"}}></strong><Link to={{'pathname':'/Booking'}}>Booking</Link></button><br/>
    <button  className="fa fa-pinterest-square icons"><strong style={{margin:"10px"}}></strong><Link to={{'pathname':'/Parkingspace'}}>Parking</Link></button><br/>
    <button  className="fa fa-file icons"><strong style={{margin:"10px"}}></strong>Reports</button><br/>
    <button  className="fa fa-sign-out icons"><strong style={{margin:"10px"}}></strong>LogOut</button><br/>




        

    </CardContent>
    {/* </table> */}
    </div>
    {/* </Card> */}
    
                </Col>
            </Row>
        </Container>
    
   

    
    </React.Fragment>
  );
}

export default Sidebar;
