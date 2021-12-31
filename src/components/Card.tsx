import React from "react";
import { HeartIcon, EyeIcon, ShareIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
const Card = (props: any) => {
  const { blog, onView } = props;
  console.log(onView);
  return (
    <div
      className="bg-white rounded-lg shadow-2xl cursor-pointer"
    //   onClick={() => onView()}
    >
      <img
        src={blog.imageUrl}
        alt="picture"
        className="w-full h-28 rounded-t-lg object-cover mb-2"
      />
      <header className="bg-purple-400 text-white text-center mb-2">
        <p className="truncate px-2 py-2">{blog.title}</p>
      </header>

      <section className="flex flex-col space-y-2 p-3">
        <p className="text-center font-thin text-sm truncate">
          {blog.description}
        </p>

        {/* <button className="text-purple-400 border border-purple-400">View</button> */}
      </section>

      <footer className="text-center rounded-b-lg p-3">
        <div className="flex justify-between space-x-2">
          {/* author section */}
          <div className="flex flex-row space-x-2 items-center mb-3">
            <img
              src={blog.authorUrl}
              alt="author_pic"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 flex-col justify-start text-left">
              <Link to="#" className="text-left">
                <span className="font-thin text-xs">{blog.authorName}</span>
              </Link>
              <div className="flex flex-row">
                <span className="font-thin" style={{ fontSize: "10px" }}>
                  {blog.postDate} . {blog.readTime} read
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse space-x-2">
            <button className="order-3">
              <HeartIcon className="w-3 h-3 text-red-600" />
            </button>
            <button className="order-2">
              <EyeIcon className="w-3 h-3 text-blue-600" />
            </button>
            <button className="1">
              <ShareIcon className="w-3 h-3 text-gray-800" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Card;
