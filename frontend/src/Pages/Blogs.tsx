import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import AllBlogs from "../components/AllBlogs";
import MyBlogs from "../components/MyBlogs";

function Blogs() {
  const navigate = useNavigate();

  const [allBlog, setAllBlog] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") === "") {
      navigate("/signin");
    }
  }, []);
  return (
    <div>
      <AppBar button="Create" />

      <div className="px-10 lg:px-48">
        <div className="flex justify-center items-center p-2">
          <div className="relative flex justify-center items-center w-60 p-2 bg-white-200 rounded-full border-4 ">
            {/* Sliding background */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-full transform transition-transform duration-300 ${
                allBlog ? "translate-x-0" : "translate-x-full"
              }`}
            ></div>

            {/* All Blogs Button */}
            <button
              onClick={() => setAllBlog(true)}
              className={`relative z-10 w-1/2 text-center py-2 transition-colors duration-300 ${
                allBlog ? "text-white" : "text-black"
              }`}
            >
              All Blogs
            </button>

            {/* My Blogs Button */}
            <button
              onClick={() => setAllBlog(false)}
              className={`relative z-10 w-1/2 text-center py-2 transition-colors duration-300 ${
                !allBlog ? "text-white" : "text-black"
              }`}
            >
              My Blogs
            </button>
          </div>
        </div>
        {allBlog ? <AllBlogs /> : <MyBlogs />}
      </div>
    </div>
  );
}

export default Blogs;
