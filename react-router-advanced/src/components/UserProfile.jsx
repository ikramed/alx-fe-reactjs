import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <div>Welcome to User {userId}'s profile!</div>;
}

export default UserProfile;
