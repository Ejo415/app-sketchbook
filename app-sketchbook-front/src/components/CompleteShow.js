import React, { Component } from "react";
import { editProject } from "../redux/actions/projectActions";
import { connect } from "react-redux";

class CompletedShow extends Component {
  
  



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
    {this.props.project[0].notepad} 
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
