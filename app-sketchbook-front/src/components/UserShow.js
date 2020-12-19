import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../redux/actions/projectActions";
import ProjectListConcepts from "./ProjectListConcepts";
import ProjectListTitles from "./ProjectListTitles";
import ProjectListComplete from "./ProjectListComplete";

class UserShow extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>{this.props.user.name}</h3>
        <br></br>{" "}
        <Link to={`/project/${this.props.user.id}/new`}>
          <button type="button">Have an Idea</button>
        </Link>
        <h4>Ideas</h4>
        {this.props.projects.map((project) => (
          <ProjectListConcepts project={project} key={project.id} />
        ))}
        
        <h4>Projects</h4>
        {this.props.projects.map((project) => (
          <ProjectListTitles project={project} key={project.id} />
        ))}
        <h4>Completed Projects</h4>
        {this.props.projects.map((project) => (
          <ProjectListComplete project={project} key={project.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users, projects }, props) => {
  const userId = +props.match.params.id;
  const user = users.all.find(function (u) {
    return u.id === userId;
  });
  const project = projects.all.filter(function (p) {
    return p.user_id === userId;
  });
  return {
    user,
    projects: project,
  };
};

export default connect(mapStateToProps, { getProjects })(UserShow);
