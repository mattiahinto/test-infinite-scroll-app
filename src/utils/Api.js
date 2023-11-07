import axios from "axios";

export const getItems = async (start) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_start=${start * 10}&_limit=10`
  );
};
