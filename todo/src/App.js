import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css";
import TodoApp from "./components/todo/TodoApp";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp/>
      </div>
    );
  }
}



export default App;
