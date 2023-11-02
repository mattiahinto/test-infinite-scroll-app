import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
