import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { RecoilRoot } from "recoil";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import NewPost from "./Pages/NewPost";
import Profile from "./Pages/Profile";
import MyBlogsPage from "./Pages/MyBlogsPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-blogs" element={<MyBlogsPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
