import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";
import { useLocation } from "react-router-dom";
// import {a} from "@heroicons/react/solid/"
const Author = () => {
  const location = useLocation()
  //@ts-ignore
  const {state: {blog}} = location;
  // const { blog} = state;
  // console.log(blog);
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r w-full from-purple-100 to-purple-300">
        <div className="flex flex-col justify-center items-center w-3/5 space-y-3">
          <div className="p-4">
            <img
              src="https://images.unsplash.com/profile-1614343821646-c1d6f4e9b56aimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
              alt="author_pic"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="text-center">
            <span className="text-white text-xl font-thin">{blog.authorName}</span>
          </div>
          <div className="text-center">
            <span className="text-white text-sm italic">
              Well known for his skills and dynamic leadership, David has led
              development teams building and deploying great products. He is
              passionate about helping people learn mobile development with
              Flutter and the leadership strategies they need to succeed
              regardless of their background. As he says, "You just have to be
              consistent and intentional to make it."
            </span>
          </div>
          <div className="flex flex-row space-x-2 pb-3">
            <FaTwitter className="text-blue-400" />
            <FaLinkedin className="text-blue-400" />
            <FaGithub className="text-gray-800"/>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-xl text-center font-bold">1 stories by Author</h4>
      </div>

    </div>
  );
};

export default Author;
