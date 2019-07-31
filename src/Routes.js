import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Instagram from './Components/Instagram';
import Profile from './Components/Profile';

class Routes extends Component {
    render() {
      return (
        <div>
          <Switch>
            <Route path="/index" component={() => <Instagram {...this.props} />} />
            <Route path="/profile" component={Profile} />             
            <Redirect from="/" to="/index" />
          </Switch>
        </div>
      );
    }
  }
  export default Routes;