import React from "react";
import { useParams } from "react-router-dom";
import { jobsContent } from "./Blogs";

const Blog = (props: any) => {
  const { id } = useParams();
//   @ts-ignore
  const job:any = jobsContent[id];
  return (
    <div className="flex">
      <h4 className="text-2xl mb-2 px-2 py-4 text-center text-gray-800">
        {job.title}
      </h4>
      <h6 className="text-xl mb-2 p-2 text-center text-gray-800">
        Company: {job.companyName}
      </h6>
      <button className="rounded-bl h-10 rounded-br bg-purple-400 text-white text-center w-full">
        Apply
      </button>
    </div>
  );
};

export default Blog;
