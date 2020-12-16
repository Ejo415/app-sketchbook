import React, { Component } from 'react';

export default class UserForm extends Component {
    state = {
        name: ''
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({
            name: ''
        })
    }
    render() { 
        return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={this.submit}>
               Name: <input onChange={e => this.setState({name: e.target.value})} type="text" value={this.state.name} />
            <input type="submit" value="Create User" />
            </form>
        </div>
        
    );
   } 
}
