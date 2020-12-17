import React from "react";
import { Link } from "react-router-dom";

export default function UserListItems({ user }) {
  return (
    <div>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </div>
  );
}
