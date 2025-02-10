import { getMyBlogs } from "../hooks/getMyBlogs";
import { BlogSkeleton } from "../skeletons/BlogSkeleton";
import BlogCard from "./BlogCard";

function MyBlogs() {
  interface blogsData {
    author: { name: string };
    title: string;
    content: string;
    published: Date;
    id: string;
  }
  const [loading, blogs = []] = getMyBlogs();
  return (
    <>
      {loading ? (
        <>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </>
      ) : (
        <>
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog: blogsData) => (
              <BlogCard
                key={blog.id}
                authorName={blog.author.name}
                publishedDate={blog.published}
                content={blog.content}
                title={blog.title}
                postid={blog.id}
              />
            ))
          ) : (
            <div>No Blog Created Yet</div>
          )}
        </>
      )}
    </>
  );
}

export default MyBlogs;
