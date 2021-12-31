import React from "react";
import ArrowCircleRightIcon from "@heroicons/react/outline/ArrowCircleRightIcon";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-2xl w-2/5">
        <h2 className="text-6xl mb-8 text-center text-gray-800">Login</h2>
        <form className="space-y-4">
          <input
            className="h-10 w-full mb-2 px-4 font-thin border border-gray-300 outline-none focus:border-gray-500"
            type="email"
            placeholder="your@example.com"
          />
          <input
            className="h-10 w-full mb-2 px-4 font-thin border border-gray-300 outline-none focus:border-gray-500"
            type="password"
            placeholder="your secret password"
          />

          <div className="text-center">
            <a
              href="#"
              className="font-thin text-sm text-gray-900 hover:text-purple-600"
            >
              Don't Remember your password?
            </a>
          </div>

          <button
            className="h-10 mb-4 w-full bg-purple-400 
             text-white font-thin flex justify-center items-center uppercase"
            type="submit"
          >
            {/* transform transition-all duration-75 ease-in-out hover:scale-105 */}
            Log in &nbsp;
            <span>
              <ArrowCircleRightIcon className="h-4 w-4" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
