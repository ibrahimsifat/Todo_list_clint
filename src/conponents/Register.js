import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (massage) => toast.success(massage);
const notifyErr = (massage) => toast.error(massage);
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitRegistration = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/user", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status) {
            notify("Account Created Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
    } catch (err) {
      notifyErr("Can't create Account! Please try again");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    // console.log(username, email, password);
  };

  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="/login-photo.jpg" alt="" class="w-full h-full object-cover" />
      </div>

      <div
        class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create a new account
          </h1>

          <form class="mt-6" method="POST">
            <div>
              <label class="block text-gray-700">UserName</label>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter user name"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minLength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div class="text-right mt-2">
              <p
                onClick={() => alert("coming soon!")}
                href="#"
                class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <button
              onClick={submitRegistration}
              type="submit"
              class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">
              Log In
            </button>
          </form>

          <hr class="my-6 border-gray-300 w-full" />

          <button
            onClick={() => alert("coming soon!")}
            type="button"
            class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 48 48">
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span class="ml-4">Log in with Google</span>
            </div>
          </button>

          <p class="mt-8">
            Already have account?{" "}
            <Link to="/">
              {" "}
              <span class="text-blue-500 hover:text-blue-700 font-semibold">
                Please Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
