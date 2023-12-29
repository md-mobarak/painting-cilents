/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageUsers = () => {
  const [users, setUsers] = useState(null);
  const [profile, setProfile] = useState({});
  const [page, setPage] = useState(1);
  const router = useRouter();
  const [size, setSize] = useState(7);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // Fetch user data from the backend API with pagination parameters
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    fetch(
      `https://painting-server-9.vercel.app/api/v1/users?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size, users]); // Re-fetch data when page or size changes

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // Fetch user data from the backend API with pagination parameters
    // Your API request logic using 'token'
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("https://painting-server-9.vercel.app/api/v1/profile", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        router.push("/login");
        // Handle errors gracefully, e.g., display an error message
        console.log(err);
      });
  }, [profile]);

  if (!users || !profile) {
    return (
      <div className="flex justify-center my-20 items-center">
        <span className="loading loading-infinity w-16   text-secondary loading-xl"></span>
      </div>
    );
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
    const token = localStorage.getItem("accessToken");
    // Fetch user data from the backend API with pagination parameters
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    // Implement the logic to delete a user by making a DELETE request to your API
    fetch(`https://painting-server-9.vercel.app/api/v1/users/${userId}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle success or error based on the response from the API
        console.log(data);
        if (res.data) {
          // toast.success("Successfully deleted User");
          toast.success("user deleted successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMakeAdmin = (userId) => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    // Implement the logic to make a user admin by making a PATCH request to your API
    fetch(`https://painting-server-9.vercel.app/api/v1/users/role/${userId}`, {
      method: "PATCH",
      headers: headers,
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
  const newUserObj = {
    users,
    profile,
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
              {users?.meta?.role === "super-admin" && (
                <th className="text-neutral">Make Admin</th>
              )}
              <th className="text-neutral">Role</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {newUserObj?.users?.user?.map((user, index) => {
              // console.log(user);
              const isUserEmail = newUserObj?.profile?.data?.email;
              return (
                <tr key={user.id} className="bg-base-200">
                  <td>{index + 1}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user?.profileImg}
                      alt={user?.username}
                    />
                  </td>
                  <td>
                    {isUserEmail === user.email ? (
                      ""
                    ) : (
                      <p
                        onClick={() => handleDeleteUser(user.id)}
                        className="flex cursor-pointer justify-center items-center"
                      >
                        <RiDeleteBin6Line className="text-red-500 h-6 w-6"></RiDeleteBin6Line>
                      </p>
                    )}
                  </td>
                  {users?.meta?.role === "super-admin" && (
                    <td>
                      {user.role === "user" ? (
                        <button
                          onClick={() => handleMakeAdmin(user.id)}
                          className="btn btn-neutral btn-xs text-white"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <button
                          disabled
                          onClick={() => handleMakeAdmin(user.id)}
                          className="btn btn-neutral btn-xs text-white"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                  )}
                  <td className=" text-neutral font-semibold">{user?.role}</td>
                </tr>
              );
            })}
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
