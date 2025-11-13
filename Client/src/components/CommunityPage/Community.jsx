import React, { useEffect, useState } from "react";
import { auth, logoutUser, db } from "../../firebase"; // Removed loginWithGoogle
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import ThreadList from "./ThreadList";
import "../../styles/Community.css";

const Community = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Listen for auth + Firestore changes
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => setUser(u || null));

    const unsubPosts = onSnapshot(collection(db, "communityPosts"), (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postData.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds));
    });

    return () => {
      unsubAuth();
      unsubPosts();
    };
  }, []);

  // 🔹 Filter posts by search
  const filteredPosts = posts.filter((p) =>
    p.text?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="community-page">
      <h2>EduLearn Community</h2>

      {/* 🔸 Show user info if logged in */}
      {user ? (
        <div className="user-info">
          <img
            src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="user"
          />
          <span>{user.displayName || user.email}</span>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className="login-reminder">
          <p>Please log in to post or interact with the community.</p>
        </div>
      )}

      {/* 🔍 Search bar */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* 🧵 Post form only if user logged in */}
      {user && <PostForm user={user} />}

      {/* 📋 Thread list */}
      <ThreadList posts={filteredPosts} user={user} />
    </div>
  );
};

export default Community;
