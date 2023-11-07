import React, { useState, useEffect } from "react";
import Post from "../Post";
import { getItems } from "../../utils/Api";
import { StyledList, StyledListHiddenLoadMore } from "./List.styled";

function List() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await getItems(page);
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
    <StyledList>
      <h1>Infinite Scroll App di MATTIA</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {loading && <p>Loading...</p>}
    </StyledList>
  );
}

export default List;
