import React, { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "../../styles/PostForm.css";

const PostForm = ({ user }) => {
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await addDoc(collection(db, "communityPosts"), {
        text,
        topic,
        author: {
          name: user.displayName || user.email,
          photoURL: user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          uid: user.uid,
        },
        timestamp: serverTimestamp(),
      });

      setText("");
      setTopic("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <form className="post-form" onSubmit={handlePostSubmit}>
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      >
        <option value="">Select topic</option>
        <option value="General">General</option>
        <option value="Doubts">Doubts</option>
        <option value="Study Tips">Study Tips</option>
        <option value="Exams">Exams</option>
      </select>

      <textarea
        placeholder="Share your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>

      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
