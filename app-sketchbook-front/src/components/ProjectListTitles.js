import React from "react";
import { Link } from "react-router-dom";

export default function ProjectListTitles({ project }) {
  return project.title && project.completed ? null : <div>
  <Link to={`/projects/${project.id}`}>{project.title}</Link>
</div>;
}
