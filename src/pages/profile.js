/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  // Check if the user data is available

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
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
        setUserProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userProfile]);
  const handleProfile = () => {
    setEditProfile(!editProfile);
  };
  if (!userProfile) {
    return <p>Loading...</p>;
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    const image = new FormData();
    image.append("image", data?.profileImg[0]);
    try {
      const response = await axios?.post(
        "https://api.imgbb.com/1/upload?key=85550ec4bf046ba661f38ebd86e505ac",
        image
      );

      if (response?.data?.data?.display_url) {
        const userData = {
          username: data.username,
          email: data.email,
          location: data.location,
          contactNo: data.contactNo,
          address: data.address,
          profileImg: response?.data?.data?.display_url,
        };

        const token = localStorage.getItem("accessToken");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const updateResponse = await fetch(
          `https://painting-server-9.vercel.app/api/v1/users/${userProfile?.data?.id}`,
          {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(userData),
          }
        );

        if (updateResponse.ok) {
          console.log("User data updated successfully");
          setEditProfile(false);
          // You may want to fetch the updated user data and setUserProfile again
          // Example: fetchUpdatedUserData();
        } else {
          console.error(
            "Failed to update user data:",
            updateResponse.statusText
          );
        }
      }
    } catch (error) {
      console.error("Error during update:", error);
    }

    reset();
  };

  const handleCancelEdit = () => {
    // If the user cancels editing, set editProfile back to false
    // You might also want to reset any form fields
    setEditProfile(false);
  };

  return (
    <div
      className={`min-h-screen ${
        !editProfile && "flex justify-center items-center lg:p-0 p-2"
      } bg-gradient-to-r from-neutral via-indigo-500 to-primary `}
    >
      {!editProfile && (
        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
          className={`border text-white border-white  p-4   rounded-xl my-10 shadow-2xl`}
        >
          <div className="text-center mb-3">
            <h1 className="text-2xl font-bold uppercase">
              {userProfile?.data?.username}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src={userProfile?.data?.profileImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2">
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-lg font-semibold">{userProfile?.data?.email}</p>
          </div>
          <div className="mb-4 grid grid-cols-2">
            <p className="text-lg font-semibold">Contact No:</p>
            <p className="text-lg font-semibold">
              {userProfile?.data?.contactNo}
            </p>
          </div>
          <div className="mb-4 grid grid-cols-2">
            <p className="text-lg font-semibold">Address:</p>
            <p className="text-lg font-semibold">
              {userProfile?.data?.address}
            </p>
          </div>
          <div className="mb-4 grid grid-cols-2">
            <p className="text-lg font-semibold">Role:</p>
            <p className="text-lg font-semibold">{userProfile?.data?.role}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleProfile}
              className="btn border border-white bg-gradient-to-r from-neutral via-indigo-500 to-primary text-white"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
      {editProfile && (
        <div
        
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
          className="  lg:p-20 p-8">
          <form
            className={`border border-white p-10 rounded-xl shadow-2xl`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-white text-2xl uppercase font-semibold">
              Edit Profile
            </h1>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg text-white  font-semibold"
              >
                Name:
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: true })}
                placeholder="Type Name"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg text-white  font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                readOnly
                id="email"
                {...register("email", { required: true })}
                value={userProfile?.data?.email}
                placeholder="Type Email"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNo"
                className="block text-white  text-lg font-semibold"
              >
                Contact No:
              </label>
              <input
                type="text"
                id="contactNo"
                {...register("contactNo", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-white  text-lg font-semibold"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                {...register("address", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white  text-lg font-semibold"
              >
                Old Password:
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-white  text-lg font-semibold"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                {...register("newPassword", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div> */}
            <div className="mb-4">
              <label
                htmlFor="profileImg"
                className="block text-white text-lg font-semibold"
              >
                Profile Image URL:
              </label>
              <input
                type="file"
                id="profileImg"
                {...register("profileImg", { required: true })}
                placeholder="Paste URL here"
                className="input  input-bordered w-full rounded-none"
              />
            </div>
            <div className="flex justify-around">
              <button
                type="submit"
                className="btn btn-sm bg-gradient-to-r from-neutral via-indigo-500 to-primary text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleProfile}
                className="btn ml-2  btn-error btn-sm border bg-red-500 border-white text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default profile;
