import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userActions";
import UserListItems from "./UserListItems";
class UsersIndex extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <h1>Users:</h1>
        {this.props.users.map((user) => (
          <UserListItems user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.all,
  };
};

export default connect(mapStateToProps, { getUsers })(UsersIndex);
