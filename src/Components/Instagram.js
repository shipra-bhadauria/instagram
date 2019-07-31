import React, {Component} from 'react';
import './Instagram.css';
import Navigation from './Navigation';
import Insta from './Insta';
import ReactDOM from 'react-dom';

class Instagram extends Component {
        constructor() {
          super();
          this.state = {
            queryText: '',
          };
          this.search = this.search.bind(this);
        }
      
      
        search(query) {
          this.setState({ queryText: query });
        }
      
        
    render(){
        return(
            <div>
              
                 <Navigation
                 search={this.search}/>
                 <div className="insta">
                   
                <Insta />
                </div>
             </div>
        );
    }
}

export default Instagram;