import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import { getBlog } from "../hooks/getBlog";
import { GetBlogSkeleton } from "../skeletons/GetBLogSkeleton";
import { SingleBlog } from "../components/SingleBlog";

function Blog() {
  const params = useParams();
  console.log(params);

  const {
    loading,
    blog = {
      author: { name: "", quote: "" },
      title: "",
      content: "",
      publishedDate: new Date(),
      id: "",
    },
  } = getBlog(params.blogId || "");

  return (
    <div className="h-screen">
      <AppBar button="Create" />
      {loading ? <GetBlogSkeleton /> : <SingleBlog blog={blog} />}
    </div>
  );
}

export default Blog;
