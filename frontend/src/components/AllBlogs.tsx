import { getBlogs } from "../hooks/getBlogs";
import BlogCard from "./BlogCard";
import { BlogSkeleton } from "../skeletons/BlogSkeleton";

function AllBlogs() {
  interface blogsData {
    author: { name: string };
    title: string;
    content: string;
    published: Date;
    id: string;
  }
  const [loading, blogs = []] = getBlogs();
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

export default AllBlogs;
