/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageUsers = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(7);

  useEffect(() => {
    // Fetch user data from the backend API with pagination parameters
    fetch(`http://localhost:5000/api/v1/users?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size,users]); // Re-fetch data when page or size changes
  if (!users) {
  return <h1>loading...</h1>
}
  // Handle pagination navigation
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < users.meta.totalPage) {
      setPage(page + 1);
    }
  };


  const handleDeleteUser = (userId) => {
    // Implement the logic to delete a user by making a DELETE request to your API
    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle success or error based on the response from the API
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMakeAdmin = (userId) => {
    // Implement the logic to make a user admin by making a PATCH request to your API
    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }), // Replace with your API's expected request body
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle success or error based on the response from the API
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <div>
      <div className="overflow-x-auto p-2">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="text-neutral">Serial</th>
              <th className="text-neutral">Name</th>
              <th className="text-neutral">Email</th>
              <th className="text-neutral">Image</th>
              <th className="text-neutral">Action</th>
              <th className="text-neutral">Make Admin</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users?.user.map((user, index) => (
              <tr key={user.id} className="bg-base-200">
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.profileImg}
                    alt={user.username}
                  />
                </td>
                <td>
                  <p
                    onClick={() => handleDeleteUser(user.id)}
                    className="flex cursor-pointer justify-center items-center"
                  >
                    <RiDeleteBin6Line className="text-red-500 h-6 w-6"></RiDeleteBin6Line>
                  </p>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user.id)}
                    className="btn btn-neutral btn-xs text-white"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-center mt-8">
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
    </div>
  );
};

export default ManageUsers;
