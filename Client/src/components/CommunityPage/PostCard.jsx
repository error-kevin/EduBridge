import React, { useState, useEffect } from "react";
import "../../styles/PostCard.css";
import {
  doc,
  updateDoc,
  arrayUnion,
  onSnapshot,
  collection,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";
import { formatDistanceToNow } from "date-fns";

const PostCard = ({ post, user }) => {
  const [likes, setLikes] = useState(post.likes || []);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // --- Fetch comments in real-time ---
  useEffect(() => {
    if (!post.id) return;

    const commentsRef = collection(db, "communityPosts", post.id, "comments");
    const q = query(commentsRef, orderBy("timestamp", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComments(data);
    });

    return () => unsub();
  }, [post.id]);

  // --- Handle Like ---
  const handleLike = async () => {
    if (!user) return alert("Please log in to like posts!");

    const postRef = doc(db, "communityPosts", post.id);
    let updatedLikes;

    if (likes.includes(user.uid)) {
      updatedLikes = likes.filter((uid) => uid !== user.uid);
    } else {
      updatedLikes = [...likes, user.uid];
    }

    setLikes(updatedLikes);
    await updateDoc(postRef, { likes: updatedLikes });
  };

  // --- Handle Comment ---
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to comment!");
    if (!commentText.trim()) return;

    const commentRef = collection(db, "communityPosts", post.id, "comments");
    await addDoc(commentRef, {
      text: commentText.trim(),
      userName: user.displayName || "Anonymous",
      userPhoto: user.photoURL || "",
      timestamp: new Date(),
    });

    setCommentText("");
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={
            post.author?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="User Avatar"
          className="post-avatar"
        />
        <div className="post-user-info">
          <span className="post-author">
            Posted by {post.author?.name || post.authorName || "Unknown"}
          </span>
          {post.timestamp && (
            <span className="post-time">
              {formatDistanceToNow(
                new Date(post.timestamp?.seconds * 1000 || post.timestamp),
                { addSuffix: true }
              )}
            </span>
          )}
        </div>
        <span className="post-topic">{post.topic || "General"}</span>
      </div>

      <div className="post-content">
        <p>{post.text}</p>
      </div>

      <div className="post-actions">
        <button onClick={handleLike}>
          ❤️ {likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </button>
        <button>
          💬 {comments.length}{" "}
          {comments.length === 1 ? "Comment" : "Comments"}
        </button>
      </div>

      {/* --- Comment Section --- */}
      <div className="comment-section">
        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <img
              src={
                c.userPhoto || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="comment-user"
              className="comment-avatar"
            />
            <div className="comment-content">
              <span className="comment-user">{c.userName}</span>
              <p className="comment-text">{c.text}</p>
            </div>
          </div>
        ))}

        {user && (
          <form onSubmit={handleAddComment} className="comment-form">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;
