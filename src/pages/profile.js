/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  // Check if the user data is available
  if (!userProfile) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("http://localhost:5000/api/v1/profile", {
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
  }, []);
  const handleProfile = () => {
    setEditProfile(!editProfile);
  };

  //   const handleUpdateProfile = () => {
  //     setEditProfile(false);
  //     };
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    // try {
    //   const response = await axios.post('/api/upload-service', data);
    //   console.log('Service uploaded:', response.data);
    //   // Add any further actions here, like redirecting to a success page
    // } catch (error) {
    //   console.error('Service upload failed:', error);
    // }
  };

  const handleCancelEdit = () => {
    // If the user cancels editing, set editProfile back to false
    // You might also want to reset any form fields
    setEditProfile(false);
  };

  return (
    <div
      className={`min-h-screen ${
        !editProfile && "flex justify-center items-center"
      } bg-gradient-to-r from-neutral via-indigo-500 to-primary text-white`}
    >
      {!editProfile && (
        <div className={`border border-white p-4 rounded-xl my-10 shadow-2xl`}>
          <div className="text-center mb-3">
            <h1 className="text-2xl font-bold uppercase">
              {userProfile?.data?.username} Profile
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
        <div className="  p-20">
          <form
            className={`border border-white p-10 rounded-xl shadow-2xl`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-2xl uppercase font-semibold">
              Edit Profile
            </h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">
                Email:
              </label>
              <input
                type="email"
                disabled
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
                className="block text-lg font-semibold"
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
              <label htmlFor="address" className="block text-lg font-semibold">
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
            <div className="mb-4">
              <label htmlFor="address" className="block text-lg font-semibold">
                Old Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-lg font-semibold">
                New Password
              </label>
              <input
                {...register("newPassword", { required: true })}
                type="newPassword"
                id="address"
                placeholder="Type here"
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="profileImg"
                className="block text-lg font-semibold"
              >
                Profile Image URL:
              </label>
              <input
                type="file"
                id="profileImg"
                placeholder="Paste URL here"
                {...register("profileImg", { required: true })}
                // value={userProfile?.data?.profileImg}
                // onChange={(e) => setProfileImg(e.target.value)}
                className="input input-bordered w-full rounded-none"
              />
            </div>
            <div className="flex justify-around">
              <button
                // onClick={handleUpdateProfile}
                className="btn btn-sm bg-gradient-to-r from-neutral via-indigo-500 to-primary text-white"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
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
