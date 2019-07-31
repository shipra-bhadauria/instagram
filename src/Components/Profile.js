import React, {Component} from 'react';
import './Profile.css';
import Navigation from './Navigation';

class Profile extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <div className="profile">
              <td>  <img src="./images/a.jpg" class="rounded-circle"/></td>
              <td><h4>Shipra Bhadauria</h4></td>
              <div className="posts">
                  <td><h6>3 posts</h6></td>
                  <td><h6>0 followers</h6></td>
                  <td><h6>0 following</h6></td>
              </div>
                <div className="row">
                 <div className="col s12">
                 <div className="col s4">
                 <div className="card">
                <div className="card-image">
                 <img src="./images/mee.jpg"/>
                  </div>
                  </div>
                  </div>

                  <div className="col s4">
                 <div className="card">
                <div className="card-image">
                    <div className="card-imag">
                    <img src="./images/f.jpg"/>
                    </div>
                 
                  </div>
                  </div>
                  </div>

                  <div className="col s4">
                 <div className="card">
                <div className="card-image">
                 <img src="./images/16.jpg"/>
                  </div>
                  </div>
                  </div>
                    </div>

                     </div>
                     </div>
            </div>
        );
    }
}
export default Profile;