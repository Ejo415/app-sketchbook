import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userActions";
import UserListItems from "./UserListItems";
import Button from 'react-bootstrap/Button';
//import ToggleButton from 'react-bootstrap/ToggleButton'

class UsersIndex extends React.Component {

    state = {
        sortedList: false,
      };

  componentDidMount() {
    this.props.getUsers();
  }

    sortedUsers = () => { 
        return ( [...this.props.users].sort(function(a, b) {
    let nameA = a.name.toUpperCase(); 
    let nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }));

}

  handleClick = () => {
    this.setState(state => ({
      sortedList: !state.sortedList
    }));
  }


  render() {
    return (
      <div>
      <Button size='sm' href="/user/new">New User</Button>
      <br></br>
      <br></br>
      <Button onClick={this.handleClick} >A-Z</Button>
        <h1>Users</h1>
        {(this.state.sortedList ? this.sortedUsers() : this.props.users).map(user => (
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
