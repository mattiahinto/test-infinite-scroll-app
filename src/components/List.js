import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    setPosts((prevPosts) => [...prevPosts, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="List">
      <h1>Infinite Scroll App di MATTIA</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default List;
