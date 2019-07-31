import React, {Component} from 'react';
import './Navigation.css';
import logo from './logo.png';
import {NavLink, Link} from 'react-router-dom';

//  class Navigation extends Component {
//      render(){
//          return(
    const Navigation  = (props) => (
            <div className="nav"> 
            
                <td><Link to="/index"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></Link></td>
                <td></td>
                <td><h2>|</h2></td>
                <td></td>
               <td>  <h2 className="instagram">Instagram</h2> </td>
               <td>   <div className="search-appointments row justify-content-center my-4">
                   <div className="col-md-6">
                     <div className="input-group">
                         <input
                          id="Search"
                          type="text"
                          placeholder="Search"
                          className="search-control"
                          aria-label="Search"
                          onChange={() => props.search()}
                          />
                          {/* onChange={e => this.props.search(e.target.value)}/> */}
                     </div>
                     </div>
                     </div>
                </td>
               <td className="profile"><NavLink to="/profile"> <img src="./images/user.png"/></NavLink> </td>




            </div>
        );
    


export default Navigation;