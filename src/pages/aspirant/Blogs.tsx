import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

export const jobsContent = [
  {
    title: "Software Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "React Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
  {
    title: "BA Developer",
    description: "This is this description",
    postDate: "Dec 7, 2021",
    readTime: "7 min",
    authorName: "David Lee",
    authorUrl:
      "https://images.unsplash.com/profile-1638796823781-58ce900317ceimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    imageUrl:
      "https://media.istockphoto.com/photos/water-splash-picture-id182812025",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-6">
        {jobsContent.map((blog, index) => (
          <Card
            key={index}
            blog={blog}
            onView={() => navigate(`/blog/${index}`)}
          />
        ))}
      </div>
      <div className="py-4">
        <Pagination />
      </div>
    </>
  );
};
export default Blogs;
