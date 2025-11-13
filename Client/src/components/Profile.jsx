import React, { useEffect, useState } from "react";
import { auth, logoutUser } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/Profile.css";

// Profile component
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => setUser(u || null));

    return () => {
      unsubAuth();
    };
  }, []);

  return (
    <div className="unique-profile-page">
      <h2>Your Profile</h2>

      {user ? (
        <div className="unique-user-info">
          <img
            src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="user"
            className="unique-user-avatar"
          />
          <div className="unique-user-details">
            <span className="unique-username">{user.displayName || user.email}</span>
            <span className="unique-user-email">{user.email}</span>
            <button className="unique-logout-button" onClick={logoutUser}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="unique-login-reminder">
          <p>Please log in to view your profile.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
