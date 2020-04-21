import React, { Component } from "react";
// import "./App.css";
import "../../bootstrap.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRouter";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodoComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import TodoComponent from './TodoComponent';
class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />
              <AuthenticatedRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
               <AuthenticatedRoute path="/todo/:id" component={TodoComponent} />
              <AuthenticatedRoute path="/todo" component={ListTodosComponent} />
             

              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
