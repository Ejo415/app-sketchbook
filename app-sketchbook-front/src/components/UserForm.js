import React, { Component } from "react";
import { createUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

class UserForm extends Component {
  state = {
    name: "",
  };

  submit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: "",
    });
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form onSubmit={this.submit}>
          Name:{" "}
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            value={this.state.name}
          />
          <input type="submit" value="Create User" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(UserForm);
