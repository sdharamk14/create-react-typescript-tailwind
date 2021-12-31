import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const jobsContent = [
  { 
    title: "Software Developer",
    companyName: "A",
  },
  {
    title: "React Developer",
    companyName: "B",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
  {
    title: "BA Developer",
    companyName: "C",
  },
];

const Blogs = () => {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {jobsContent.map((job, index) => (
        <div key={index} className="border rounded-md">
          <h4 className="text-2xl mb-2 px-2 py-4 text-center text-gray-800">
            {job.title}
          </h4>
          <h6 className="text-xl mb-2 p-2 text-center text-gray-800">
            Company: {job.companyName}
          </h6>
          <button onClick={() => navigate(`/blog/${index}`)}
            className="rounded-bl h-10 rounded-br bg-purple-400 text-white text-center w-full">
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};
export default Blogs;
