import React from "react";
import ChartPieIcon from "@heroicons/react/outline/ChartPieIcon";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/login" className="text-white">
          Login
        </NavLink>
        <NavLink to="/signup" className="text-white">
          SignUp
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
