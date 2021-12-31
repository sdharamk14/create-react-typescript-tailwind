import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center py-2 space-x-4">
      <button className="hover:text-purple-600">First</button>
      <button className="hover:text-purple-600">
        <FaChevronLeft />
      </button>
      <div className="flex justify-center items-center space-x-4">
        <button className="hover:text-purple-600">1</button>
        <button className="hover:text-purple-600">2</button>
        <button className="hover:text-purple-600">3</button>
        <button className="hover:text-purple-600">4</button>
      </div>
      <button className="hover:text-purple-600">
        <FaChevronRight />
      </button>
      <button className="hover:text-purple-600">Last</button>
    </div>
  );
};

export default Pagination;
