import React from "react";
import PostCard from "./PostCard";
import "../../styles/ThreadList.css";

const ThreadList = ({ posts, user }) => {
  const grouped = posts.reduce((acc, post) => {
    acc[post.topic] = acc[post.topic] || [];
    acc[post.topic].push(post);
    return acc;
  }, {});

  return (
    <div className="thread-list">
      {Object.entries(grouped).map(([topic, posts]) => (
        <div key={topic}>
          <h3>{topic}</h3>
          {posts.map((p) => (
            <PostCard key={p.id} post={p} user={user} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
