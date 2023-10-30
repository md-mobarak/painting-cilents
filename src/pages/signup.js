/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { cssTransition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    contactNo: "",
    address: "",
    role: "user",
    profileImg: null, // Profile image
  });
  const swirl = cssTransition({
    enter: "swirl-in-fwd",
    exit: "swirl-out-bck",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Special handling for file input (profileImg)
    const newValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation for required fields
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (formData.location.trim() === "") {
      newErrors.location = "Location is required";
    }

    if (formData.contactNo.trim() === "") {
      newErrors.contactNo = "Contact Number is required";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    // Validate profile image type and size (you can customize this)
    if (formData.profileImg) {
      if (!formData.profileImg.type.startsWith("image/")) {
        newErrors.profileImg = "Please upload an image file";
      } else if (formData.profileImg.size > 1024 * 1024) {
        newErrors.profileImg = "Image size should be less than 1MB";
      }
    } else {
      newErrors.profileImg = "Profile Image is required";
    }
    // If there are errors, don't submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const image = new FormData();
      image.append("image", formData.profileImg);
      await axios
        .post(
          "https://api.imgbb.com/1/upload?key=85550ec4bf046ba661f38ebd86e505ac",
          image
        )
        .then((res) => {
          //   console.log(res.data.data.display_url);
          if (res?.data?.data?.display_url) {
            const userData = {
              username: formData.username,
              email: formData.email,
              role: formData.role,
              password: formData.password,
              location: formData.location,
              contactNo: formData.contactNo,
              address: formData.address,
              profileImg: res?.data?.data?.display_url,
            };
            axios
              .post("http://localhost:5000/api/v1/auth/signup", userData)
              .then((res) => {
                toast.success(res.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                  transition: swirl,
                });
                router.push("/login");
              })
              .catch((err) => {
                toast.error(err.response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                });
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center py-10 justify-center bg-gradient-to-tr from-blue-500 to-purple-500 hover:from-blue-500 hover:to-purple-500">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            U
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
            />
            <div className="text-red-500 text-sm">{errors.username}</div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
            />
            <div className="text-red-500 text-sm">{errors.email}</div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
            <div className="text-red-500 text-sm">{errors.password}</div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your location"
            />
            <div className="text-red-500 text-sm">{errors.location}</div>
          </div>
          <div>
            <label
              htmlFor="contactNo"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your contact number"
            />
            <div className="text-red-500 text-sm">{errors.contactNo}</div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your address"
            />
            <div className="text-red-500 text-sm">{errors.address}</div>
          </div>
          <div>
            <label
              htmlFor="profileImg"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profileImg"
              name="profileImg"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-t-md focus:ring focus:ring-blue-200"
            />
            <div className="text-red-500 text-sm">{errors.profileImg}</div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-tr from-blue-400 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Register
            </button>
          </div>
        </form>
        <Link href="/login" className="text-lg font-semibold">
          You have an account
          <small className="text-blue-500 mx-2">please Login</small>
        </Link>
      </div>
    </div>
  );
};

export default signup;
