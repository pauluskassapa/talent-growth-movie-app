// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
