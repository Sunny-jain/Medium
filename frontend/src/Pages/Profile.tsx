import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import { getUser } from "../hooks/getUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const navigate = useNavigate();

  const { user } = getUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    setUsername(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setConfirmPassword(user.password);
    setQuotes(user.quote);
  }, [user]);

  const initials = (username: string) => {
    return username
      .split(" ")
      .map((name) => name[0])
      .join("");
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleDelete = () => {
    console.log("Item deleted!");
    setIsModalOpen(false);
    navigate("/signup");
  };

  const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setConfirmpasswordVisible((prev) => !prev);
  };

  const saveHandler = () => {
    // Validate the inputs
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill in all the fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          backgroundColor: "#f1948a",
          color: "white", // White text
          fontWeight: "bold",
          borderRadius: "8px",
        },
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords Doesn't Match", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // style: {
        //   backgroundColor: "#f1948a",
        //   color: "white",
        //   fontWeight: "bold",
        //   borderRadius: "8px",
        // },
      });

      return;
    }
  };

  const deleteHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className=" flex flex-col w-screen h-screen">
      <ToastContainer />
      <AppBar button="Create" />
      <div className="relative flex flex-col h-full">
        <div className="xl:absolute xl:inset-0 flex h-1/3 w-full items-center gap-5 justify-center bg-gradient-to-b from-gray-900 to-black">
          <div className="flex justify-center items-center text-4xl font-semibold rounded-full bg-slate-200 w-20 h-20 md:w-32 md:h-32">
            {initials(user.name)}
          </div>
          <div className="text-white text-3xl">{user.name}</div>
        </div>
        <div className="xl:absolute xl:inset-y-56 flex w-full justify-center h-auto md:h-auto xl:h-2/3">
          <div className="flex flex-col items-center bg-white w-full xl:w-6/12 border rounded-lg p-5 shadow-2xl">
            <div className="text-xl">Basic Information</div>
            <div className="flex flex-col gap-4 mt-5 xl:mt-10 w-full">
              <div className="flex items-center w-full">
                <div className="flex justify-center text-md w-1/3">
                  Username
                </div>
                <div className="w-2/3">
                  <input
                    type="text"
                    className={`border text-md border-t-0 border-l-0 border-r-0 border-b-slate-950  focus:border-b-blue-500 outline-none transition-colors duration-300 p-1 w-3/4`}
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center w-full">
                <div className="flex justify-center text-md w-1/3">Email</div>
                <div className="w-2/3">
                  <input
                    type="email"
                    className={`border text-md border-t-0 border-l-0 border-r-0 border-b-slate-950  focus:border-b-blue-500 outline-none transition-colors duration-300 p-1 w-3/4`}
                    placeholder="Emter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center w-full">
                <div className="flex justify-center text-md w-1/3">
                  Password
                </div>
                <div className="w-2/3">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="border text-md border-t-0 border-l-0 border-r-0 border-b-slate-950 focus:border-b-blue-500 outline-none transition-colors duration-300 p-1 w-3/4"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="flex mt-2">
                    <input
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      checked={passwordVisible}
                      onChange={togglePasswordVisibility}
                    />
                    <label
                      htmlFor="hs-toggle-password-checkbox"
                      className="text-xs text-gray-500 ms-3 dark:text-neutral-400"
                    >
                      Show password
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full">
                <div className="flex justify-center text-md w-1/3">
                  Confirm Password
                </div>
                <div className="w-2/3">
                  <input
                    type={confirmpasswordVisible ? "text" : "password"}
                    className="border text-md border-t-0 border-l-0 border-r-0 border-b-slate-950 focus:border-b-blue-500 outline-none transition-colors duration-300 p-1 w-3/4"
                    placeholder="Confirm Your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="flex mt-2">
                    <input
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      checked={confirmpasswordVisible}
                      onChange={toggleConfirmPasswordVisibility}
                    />
                    <label
                      htmlFor="hs-toggle-password-checkbox"
                      className="text-xs text-gray-500 ms-3 dark:text-neutral-400"
                    >
                      Show password
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full">
                <div className="flex justify-center text-md w-1/3">Quote</div>
                <div className="w-2/3">
                  <div className="w-3/4">
                    <textarea
                      id="message"
                      className="p-2.5 border w-full text-md text-gray-900 resize-none rounded-lg h-full focus:outline-none "
                      rows={3}
                      cols={1}
                      placeholder="Tell Your Story..."
                      value={quotes}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-3/5 gap-3">
              <button
                type="button"
                className="mt-5 xl:mt-10 w-1/2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={saveHandler}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-5 xl:mt-10 w-1/2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={deleteHandler}
              >
                Delete
              </button>
              <DeleteConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
