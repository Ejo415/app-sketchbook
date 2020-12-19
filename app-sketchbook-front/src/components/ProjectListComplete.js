import React from "react";
import { Link } from "react-router-dom";

export default function ProjectListComplete({ project }) {
  return project.title && !project.completed ? null : (
    <div>
      <Link to={`/project/${project.id}/complete`}>{project.title}</Link>
    </div>
  );
}
