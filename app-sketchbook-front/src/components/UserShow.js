import React from "react";
import { connect } from "react-redux";

class UserShow extends React.Component {
  render() {
    return (
      <div>
        <h1>User:</h1>
        {this.props.user.name}
      </div>
    );
  }
}

const mapStateToProps = ({ users }, props) => {
  console.log(props);
  const userId = +props.match.params.id;
  const user = users.all.find(function (u) {
    return u.id === userId;
  });
  return {
    user,
  };
};

export default connect(mapStateToProps)(UserShow);
