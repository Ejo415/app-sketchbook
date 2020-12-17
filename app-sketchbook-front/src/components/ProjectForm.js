import React, { Component } from "react";
import { createProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";

class ProjectForm extends Component {
  state = {
    concept: "",
  };

  submit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.setState({
      concept: "",
    });
    //this.props.history.push("/users");
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
          <input type="submit" value="Create Project" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createProject })(ProjectForm);
