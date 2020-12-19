import React, { Component } from "react";
import { editProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";

class CompletedShow extends Component {
  
  



  render() {
       console.log(this.props.project[0])
    return (
       
      <div>
      
        <h1>App Overview</h1>
      <h2>{this.props.project[0].title}</h2>
        <br></br>
      <h2>Goals:</h2>{this.props.project[0].goals}
        <br></br>
      <h2>Languages:</h2>{this.props.project[0].languages}
          <br></br>
   <h2>Notes:</h2> {this.props.project[0].notepad} 
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
  

export default connect(mapStateToProps, { editProject })(CompletedShow);
