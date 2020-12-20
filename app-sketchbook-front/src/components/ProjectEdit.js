import React, { Component } from "react";
import { editProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'

class ProjectEdit extends Component {
  
    state = {
    title: '',
    goals: '',
    languages: '',
    notepad: '',
    id: `${this.props.project[0].id}`
  };




  submit = (e) => {
    e.preventDefault();
    console.log();
    this.props.editProject(this.state);
    this.setState({
      concept: "",
    });
    this.props.history.push(`/users/${this.props.project[0].user_id}`);
  };

  render() {
       console.log(this.props.project[0].concept)
    return (
       
      <div>
      
        <h1>Expand on Your Idea</h1>
        <h3>Concept: {this.props.project[0].concept} </h3>
        <Form onSubmit={this.submit}>
{/*      
        <Form.Group controlId="Project_Edit">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter a Title" onChange={(e) => this.setState({ title: e.target.value })}
            
            value={this.state.title} />
            <br></br>
        <Form.Control type="text" placeholder="Share your Goals" onChange={(e) => this.setState({ goals: e.target.value })}
           
            value={this.state.goals} />
            <br></br>
        <Form.Control type="text" placeholder="Enter your Languages" onChange={(e) => this.setState({ langauges: e.target.value })}
            
            value={this.state.languages} />
            <br></br>
        <Form.Control as="textarea" placeholder="Notes" onChange={(e) => this.setState({ notepad: e.target.value })}
            
            value={this.state.notepad} />
        </Form.Group> */}
          <br></br>
          Title:{" "}
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
            value={this.state.title}
          />
          <br></br>
          Goals:{" "}
          <input
            onChange={(e) => this.setState({ goals: e.target.value })}
            type="text"
            value={this.state.goals}
          />
          <br></br>
          Languages:{" "}
          <input
            onChange={(e) => this.setState({ languages: e.target.value })}
            type="text"
            value={this.state.languages}
          />
          <br></br>
          Notepad:{" "}
          <input
            onChange={(e) => this.setState({ notepad: e.target.value })}
            as="textarea"
            value={this.state.notepad}
          />
          <br></br>
          <input type="submit" value="Begin Project" />
        </Form>
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
  

export default connect(mapStateToProps, { editProject })(ProjectEdit);
