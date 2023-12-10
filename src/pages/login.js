import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation for required fields
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    // If there are errors, don't submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can submit the data or make an API request here
      // console.log("Form data is valid:", formData);
      axios
        .post(
          "https://painting-server-9.vercel.app/api/v1/auth/signin",
          formData
        )
        .then((res) => {
          const token = res.data.data.accessToken;
          localStorage.setItem("accessToken", token);
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          formData.email = "";
          router.push("/");
        })
        .catch((err) => {
          toast.error(err.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-anchor-placement="top-bottom"
      className="min-h-screen flex items-center py-10 justify-center bg- -to-tr from-blue-500 to-purple-500 hover:from-blue-500 hover:to-purple-500"
    >
      <div className="w-full max-w-md p-6 space-y-6 border border-purple-500 bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            U
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-tr from-blue-400 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Login
            </button>
          </div>
        </form>
        <Link href="/signup" className="text-xl font-semibold">
          Don not have an account?{" "}
          <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
