import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null,
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    // this.addTodoClicked = this.addTodoClicked(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      this.setState({
        todos: response.data,
      });
    });
    
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({
        message: `Delete of todo ${id} Successful`,
      });
      this.refreshTodos();
    });
  }

  updateTodoClicked(id) {
    console.log("update " + id);
    this.props.history.push(`/todo/${id}`);
  }

  addTodoClicked=()=> {
      console.log("LOGGING");
      
    this.props.history.push(`/todo/-1`);
  }

  render() {
    // return <div>Welcome {this.props.match.params.name}</div>;
    return (
      <>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Target Date</th>
                <th>Is Completed</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>{todo.done.toString()} </td>
                  <td>
                    <button
                      onClick={() => this.updateTodoClicked(todo.id)}
                      className="btn btn-success"
                    >
                      Update
                    </button>{" "}
                  </td>

                  <td>
                    <button
                      onClick={() => this.deleteTodoClicked(todo.id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              {" "}
              Add{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ListTodosComponent;
