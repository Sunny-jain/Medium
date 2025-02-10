import AppBar from "../components/AppBar";
import MyBlogs from "../components/MyBlogs";

function MyBlogsPage() {
  return (
    <div>
      <AppBar button="Create" />

      <div className="px-10 lg:px-48">
        <MyBlogs />
      </div>
    </div>
  );
}

export default MyBlogsPage;
