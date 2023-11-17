/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  // console.log(blogs);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    fetch(`http://localhost:5000/api/v1/blogs?page=${page}&size=${size}`, {
      method: "GET",
      headers: headers,
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

  // Handle pagination navigation
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < blogs.meta.totalPage) {
      setPage(page + 1);
    }
  };

  const handleDelete = (id) => {
    window.alert("Are you suer?");
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    fetch(`http://localhost:5000/api/v1/blogs/${id}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success === true) {
          toast.success("Successfully Deleted Blogs", {
            position: toast.POSITION.TOP_CENTER,
            transition: swirl,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-10">
      <h1 className="text-center my-10 text-2xl font-semibold uppercase">
        Manage Blog
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {blogs?.blogs?.map((b) => {
          return (
            <div className=" bg-base-100 w-64 shadow-xl">
              <figure className="flex  justify-center items-center">
                <img className="" src={b?.img_url} alt="Shoes" />
              </figure>
              <div className="p-2">
                <h1 className="text-green-500 font-semibold">{b?.title}</h1>
                <small>{b?.description}</small>
                <div
                  onClick={() => handleDelete(b?.id)}
                  className="badge btn btn-xs text-white bg-red-500 badge-outline"
                >
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination  */}
      <div className="flex items-center justify-center my-10">
        <button
          onClick={handlePreviousPage}
          className="join-item btn btn-primary btn-xs text-white"
        >
          Previous
        </button>
        <span className="mx-3 font-semibold">Page Number: {page}</span>
        <button
          onClick={handleNextPage}
          className="join-item btn btn-primary btn-xs text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;