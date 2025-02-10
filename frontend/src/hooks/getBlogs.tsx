import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const getBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      var url = import.meta.env.VITE_GET_ALL_BLOG_API_URL;

      axios.get(BACKEND_URL + url).then((response) => {
        setBlogs(response.data.posts);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return [loading, blogs];
};
