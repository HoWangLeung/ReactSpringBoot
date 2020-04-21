import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRouter extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIN()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRouter;
