import React, { Component } from "react";
import { editProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";

class WIPShow extends Component {
  
    state = {
    notepad: `${this.props.project[0].notepad}`,
    id: `${this.props.project[0].id}`
    //completed: false
  };




  submit = (e) => {
    e.preventDefault();
    console.log();
    this.props.editProject(this.state);
    //this.props.history.push(`/users/${this.props.project[0].user_id}`);
  };
  submitComplete = (e) => {
    e.preventDefault();
    console.log();
    this.props.editProject({id:this.state.id,completed:true});
    this.props.history.push(`/users/${this.props.project[0].user_id}`);
  };

  render() {
       console.log(this.props.project[0])
    return (
       
      <div>
      

      <h1>{this.props.project[0].title}</h1>
        <br></br>
      {this.props.project[0].goals}
        <br></br>
      {this.props.project[0].languages}
          <br></br>
          <form onSubmit={this.submit}>
          Notepad:{" "}
          <input
            onChange={(e) => this.setState({ notepad: e.target.value })}
            type="text"
            value={this.state.notepad}
          />
          <br></br>
          <input type="submit" value="Save Notes" />
        </form>
        <button onClick={this.submitComplete} value="Complete Project" >Complete Project</button>.
      </div>
    );
  }
}

const mapStateToProps = ({ projects }, props) => {
    const projectId = +props.match.params.id;
    const project = projects.all.filter(p =>
     p.id === projectId
    );

    return {
      project
      };
    
  };
  

export default connect(mapStateToProps, { editProject })(WIPShow);
