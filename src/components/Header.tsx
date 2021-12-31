import React from "react";
import ChartPieIcon from "@heroicons/react/outline/ChartPieIcon";
const Header = () => {
  return (
    <nav className="flex justify-between items-center min-w-full h-14 bg-purple-400 px-5 py-2 mb-8">
      <div className="">
        <a href="/">
            <div className="flex justify-center items-center text-white uppercase">

          <ChartPieIcon className="w-8 h-8" />
          &nbsp; Opportunist
            </div>
        </a>
      </div>
      <div className="space-x-3">
        <a href="/" className="text-white">
          Login
        </a>
        <a href="/" className="text-white">
          SignUp
        </a>
      </div>
    </nav>
  );
};

export default Header;
