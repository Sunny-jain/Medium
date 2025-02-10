import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  authEmailAtom,
  authPasswordAtom,
  authUsernameAtom,
} from "../store/AuthAtom";
import { useEffect, useState } from "react";
import { SigninData, SignupData } from "@sunnyjain/medium-common";
import { authApi } from "../utils/api";
import { Alert } from "@mui/material";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [authEmail, setAuthEmail] = useRecoilState(authEmailAtom);
  const [authUsername, setAuthUsername] = useRecoilState(authUsernameAtom);
  const [authPassword, setAuthPassword] = useRecoilState(authPasswordAtom);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setAuthEmail("");
    setAuthPassword("");
    setAuthUsername("");
  }, [type]);

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const body: SigninData | SignupData =
      type === "signin"
        ? { email: authEmail, password: authPassword }
        : { name: authUsername, email: authEmail, password: authPassword };

    const url =
      type === "signin"
        ? import.meta.env.VITE_SIGNIN_API_URL
        : import.meta.env.VITE_SIGNUP_API_URL;

    authApi(body, url)
      .then((response) => {
        localStorage.setItem("token", "Bearer " + response.token);
        navigate("/blogs");
      })
      .catch((error) => {
        setError(error.response.error);
      });
  };

  return (
    <div className="flex flex-col w-2/3">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-4xl font-bold flex items-center">
          {type === "signin"
            ? "Login To Your Account"
            : "Create Your New Account"}
        </div>
        <div className="text-xl py-2">
          {type === "signin" ? (
            <>
              Don’t have an account?{" "}
              <Link className="text-blue-500 underline" to={"/signup"}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link className="text-blue-500 underline" to={"/signin"}>
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <div className="flex flex-col w-full justify-center">
        <label
          htmlFor="first_name"
          className={`font-semibold text-lg pt-3 pb-1 ${
            type === "signin" ? "hidden" : ""
          }`}
        >
          Username
        </label>
        <input
          type="text"
          id="first_name"
          className={`border text-lg border-t-0 border-l-0 border-r-0 boder-b-[#e7e7ea] focus:border-b-blue-500 outline-none transition-colors duration-300 p-1.5 text-md ${
            type === "signin" ? "hidden" : ""
          }`}
          placeholder="Enter Your First Name"
          value={authUsername}
          onChange={(e) => setAuthUsername(e.target.value)}
          required
        />
        <label htmlFor="email" className="font-semibold text-lg pt-3 pb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-t-0 border-l-0 text-lg border-r-0 boder-b-[#e7e7ea] focus:border-b-blue-500 outline-none transition-colors duration-300 p-1.5 text-md"
          placeholder="Enter Your Email"
          value={authEmail}
          onChange={(e) => {
            setAuthEmail(e.target.value);
          }}
        />
        <label htmlFor="password" className="font-semibold text-lg pt-3 pb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-t-0 border-l-0 border-r-0 text-lg boder-b-[#e7e7ea] focus:border-b-blue-500 outline-none transition-colors duration-300 p-1.5 text-md"
          placeholder="Enter Your Password"
          value={authPassword}
          onChange={(e) => {
            setAuthPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-black text-white rounded-lg text-xl p-2 mt-6"
        onClick={buttonHandler}
      >
        {type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
};
