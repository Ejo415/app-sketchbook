import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProjectShow extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <h3>{this.props.user.name}</h3>
        <br></br>{" "}
        <Link to={`/project/${this.props.user.id}/new`}>
          <button type="button">Have an Idea</button>
        </Link>
        <h4>Ideas</h4>
        <h4>Projects</h4>
        <h4>Completed Projects</h4>
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

export default connect(mapStateToProps)(UserShow);
