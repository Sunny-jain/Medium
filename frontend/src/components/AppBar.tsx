import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../hooks/getUser";

function AppBar({ button }: { button: "Publish" | "Create" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = getUser();

  const initials = (username: string) => {
    return username
      .split(" ")
      .map((name) => name[0])
      .join("");
  };

  const navigate = useNavigate();

  const clickHandler = () => {
    if (button === "Create") {
      navigate("/newPost");
    }
  };

  const saveHandler = () => {
    navigate("/blogs");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex py-5 px-10 md:px-32 justify-between items-center border-b-2">
      <div className="flex items-center justify-center text-2xl font-semibold">
        <Link to="/blogs">Medium</Link>
      </div>
      <div className="flex gap-1 items-center md:gap-5">
        <div className="flex items-center space-x-1">
          {button === "Publish" && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 text-center"
              onClick={saveHandler}
            >
              Save
            </button>
          )}
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 text-center"
            onClick={clickHandler}
          >
            {button}
          </button>
        </div>

        <div className="relative">
          <div
            className="flex justify-center items-center h-10 w-10 bg-slate-300 rounded-full font-medium cursor-pointer"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            {initials(user.name)}
          </div>
          {dropdownOpen && (
            <div
              className="absolute right-0 z-50 mt-2 w-48 bg-gray-700 divide-y divide-gray-100 rounded shadow"
              id="dropdown-user"
            >
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  {user.email}
                </p>
              </div>
              <ul className="py-1">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-blogs"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    My Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppBar;
