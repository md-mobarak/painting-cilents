/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { AiFillFormatPainter } from "react-icons/ai";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  // const [page, setPage] = useState(1);
  // const [size, setSize] = useState(3);
  // console.log(blogs);
  useEffect(() => {
    // const token = localStorage.getItem("accessToken");
    //   const headers = {
    //     "Content-Type": "application/json",
    //     authorization: `Bearer ${token}`,
    //   };
    fetch(`http://localhost:5000/api/v1/blogs/user`, {
      method: "GET",
      // headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blogs]);
  return (
    <div className="font-serif">
      <div
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/gallery2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-40 backdrop-filter backdrop-blur-sm">
          <h1 className="text-4xl pt-20 text-center font-bold text-yellow-300 ">
            OUR BLOGS
          </h1>
          <p className="text-center text-xl my-8 text-white">
            We have everything you need to bring your vision to life, from our
            expert painters to our dedication to customer satisfaction.
          </p>
          <div className="divider">
            <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-secondary mt-10">
        RECENT BLOGS
      </h1>
      <div className="lg:grid grid-cols-3 p-20 gap-8">
        {blogs?.data?.map((b) => {
          return (
            <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
              <img
                className="w-full h-40 object-cover object-center mb-4 rounded-md"
                src={b.img_url}
                alt="Card Image"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {b.title}
              </h2>
              <p className="text-gray-600 mb-2">
                {b?.description?.slice(0, 100)}
              </p>
              <p className="text-gray-400 text-sm mb-2">
                Date: November 20, 2023
              </p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default blogs;
