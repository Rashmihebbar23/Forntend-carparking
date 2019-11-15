import React from 'react';
import Register from '../login/Register'



import Login from '../login/Login';
import Sidebar from '../Commons/Sidebar'
import {Route} from 'react-router-dom';
import Booking from '../Dashboard/Booking';
import Parkingspace from '../Dashboard/Parkingspace';
import Addbooking from '../Dashboard/Addbooking';
import Clients from '../Dashboard/Clients';



function Routing() {
  return (
    <div className="Routing">
    <Route path="/Login" component={Login}></Route>
    <Route path="/Register" component={Register}></Route>
     <Route path="/Sidebar" component={Sidebar}></Route> 
     <Route path="/Booking" component={Booking}></Route>
     <Route path="/Parkingspace" component={Parkingspace}></Route>
     <Route path="/Addbooking" component={Addbooking}></Route>
     <Route path="/Clients" component={Clients}></Route>
  
    
    </div>
  );
}

export default Routing;
