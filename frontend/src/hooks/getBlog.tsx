import { useState, useEffect } from "react";
import { blogApi } from "../utils/api";

export interface Blog {
  author: { name: string; quote: string };
  title: string;
  content: string;
  publishedDate: Date;
  id: string;
}

export const getBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>({
    author: { name: "", quote: "" },
    title: "",
    content: "",
    publishedDate: new Date(),
    id: "",
  });

  useEffect(() => {
    blogApi(id, import.meta.env.VITE_GET_BLOG_API_URL)
      .then((post) => {
        console.log(post);
        
        setBlog(post);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return { loading, blog };
};
