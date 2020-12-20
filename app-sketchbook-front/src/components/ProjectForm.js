import React, { Component } from "react";
import { createProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";

class ProjectForm extends Component {
  state = {
    concept: "",
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.props.user);
    this.props.createProject(this.state, this.props.user);
    this.setState({
      concept: "",
    });
    console.log(this.props)
    this.props.history.push(`/users/${this.props.match.params.id}`);
  };

  render() {
     // debugger
    return (
      <div>
        <h1>Have an Idea</h1>
        <form onSubmit={this.submit}>
          Concept:{" "}
          <input
            onChange={(e) => this.setState({ concept: e.target.value })}
            type="text"
            value={this.state.name}
          />
          <input type="submit" value="Create Project" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, props) => {
  const userId = +props.match.params.id;
  const user = users.all.find(function (u) {
    return u.id === userId;
  });
  return {
    user,
  };
};

export default connect(mapStateToProps, { createProject })(ProjectForm);
