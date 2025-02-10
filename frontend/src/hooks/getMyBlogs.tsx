import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const getMyBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      var url = import.meta.env.VITE_GET_MY_BLOG_URL;
      axios
        .get(BACKEND_URL + url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setMyBlogs(response.data.posts);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return [loading, myBlogs];
};
