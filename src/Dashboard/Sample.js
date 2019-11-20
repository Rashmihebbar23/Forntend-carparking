
import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Sidebar from '../Commons/Sidebar';

import './Sample.css'


class Sample extends Component{
    render(){
        return(
            <React.Fragment>
                 <div className="container">
            <Row>
  <div className="Product">
    <Sidebar></Sidebar>
         </div>
         <div className="card">
             <div className="card-body"></div>
             <div class="grid-container">
  {/* <header class="header"></header> */}
  <div class="row">
  
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
  {/* <aside class="sidenav"></aside> */}
  <main class="main"></main>
  <footer class="footer"></footer>
</div>
            
 

             
         </Row>
            </div>
            </React.Fragment>
        )
    }
}
export default Sample;