import React from "react";
import { Link } from "react-router-dom";

export default function ProjectListConcepts({ project }) {
  return project.title ? null : (
    <div>
      <Link to={`/project/${project.id}/edit`}>{project.concept}</Link>
    </div>
  );
}
