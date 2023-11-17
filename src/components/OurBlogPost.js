// components/BlogPostForm.js
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurBlogPost = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };
    
      const response = await axios.post(
        "http://localhost:5000/api/v1/blogs/",
        {
          title,
          img_url :imageUrl,
          description,
        },
        { headers }
      );
console.log(response);
      if (response.status === 200) {
        toast.success("Successfully done blog post", {
          position: toast.POSITION.TOP_CENTER,
          transition: swirl,
        });
      } else {
        console.error("Failed to submit blog post");
      }
    } catch (error) {
      console.error("Error during blog post submission:", error);
    }

    // Reset the form
    setTitle("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <div className=" bg-secondary h-screen">
      <h1 className="text-center text-3xl font-bold text-primary pt-10 uppercase">
        Blog POst
      </h1>
      <div className="max-w-md mx-auto p-6 my-10 bg-neutral rounded-xl shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white text-sm font-semibold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-white text-sm font-semibold mb-2"
            >
              Image URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white text-sm font-semibold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OurBlogPost;
