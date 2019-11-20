import React,{Component} from 'react';
class Search extends Component
{
    render()
    {
       return(
           <React.Fragment>
<input type="text" onChange={this.props.InputHandler}></input>
           </React.Fragment>
       )
    }
}
export default Search; 