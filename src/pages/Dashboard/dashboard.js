/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */

import AllBlogs from "@/components/AllBlogs";
import ManageProducts from "@/components/ManageProducts";
import ManageReviews from "@/components/ManageReviews";
import { useEffect } from "react";
import ManageUsers from "@/components/ManageUsers";
import OurBlogPost from "@/components/OurBlogPost";
import UploadProduct from "@/components/UploadProduct";
import { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { MdOutlineManageAccounts, MdOutlinePreview } from "react-icons/md";
import { PiUsersFour } from "react-icons/pi";
import { RiChatUploadFill } from "react-icons/ri";
const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [uploadProduct, setUploadProduct] = useState(false);
  const [manageProduct, setManageProduct] = useState(false);
  const [blogPosts, setBlogPosts] = useState(false);
  const [allBlog, setAllBlog] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [manageUser, setManageUser] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const [user, setUser] = useState({});

  // console.log(adminAndSuperAdmin);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
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
        setUser(data);
      })
      .catch((err) => {
        // Handle errors gracefully, e.g., display an error message
        // console.log(err);
      });
  }, [user]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleUploadProduct = () => {
    setUploadProduct(true);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(false);
    setAllBlog(false);
    setReviews(false);
  };
  const handleManageProduct = () => {
    setUploadProduct(false);
    setManageProduct(true);
    setBlogPosts(false);
    setManageUser(false);
    setAllBlog(false);
    setReviews(false);
  };
  const handleMangeUser = () => {
    setUploadProduct(false);
    setManageProduct(false);
    setBlogPosts(false);
    setManageUser(true);
    setAllBlog(false);
    setReviews(false);
  };
  const handleBlogPost = () => {
    setUploadProduct(false);
    setManageProduct(false);
    setBlogPosts(true);
    setManageUser(false);
    setAllBlog(false);
    setReviews(false);
  };
  const handleAllBlog = () => {
    setUploadProduct(false);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(true);
    setReviews(false);
  };
  const handleAllReviews = () => {
    setUploadProduct(false);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(false);
    setReviews(true);
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-secondary bg-neutral py-3 w-full font-bold text-3xl">
        Dashboard
      </h1>
      <div className="flex ">
        <aside className={` bg-neutral px-3 py-2  md:w-1/8 p-4 bg-gray-200`}>
          <div
            className={`${
              manageUser && " bg-secondary     "
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p onClick={handleMangeUser}>Manage User</p>

            <p>
              <PiUsersFour
                className={`mx-2 h-6 w-6 text-secondary ${
                  manageUser && "text-white"
                }`}
              ></PiUsersFour>
            </p>
          </div>
          <div
            className={`${
              allBlog && " bg-secondary     "
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p         onClick={handleAllBlog}>   Manage Blog</p>

            <p>
            <MdOutlineManageAccounts
                className={`mx-2 h-6 w-6 text-secondary ${
                  allBlog && "text-white"
                }`}
                ></MdOutlineManageAccounts>
            </p>
          </div>
          <div
            className={`${
              uploadProduct && " bg-secondary     "
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p onClick={handleUploadProduct}>  Service Upload</p>

            <p>
            <RiChatUploadFill
                className={`mx-2 h-6 w-6 text-secondary ${
                  uploadProduct && "text-white"
                }`}
                ></RiChatUploadFill>
            </p>
          </div>
      
          <div
            className={`${
              manageProduct &&"bg-secondary"
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p onClick={handleManageProduct}> Manage Service</p>

            <p>
            <FcManager 
                className={`mx-1 h-6 w-6 text-secondary ${
                  manageProduct && "text-white"
                }`}
                ></FcManager>
            </p>
          </div>

          <div
            className={`${
              blogPosts &&"bg-secondary"
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p onClick={handleBlogPost}>Blog Post</p>

            <p>
            <BsNewspaper
                className={`mx-1 h-6 w-6 text-secondary ${
                  blogPosts && "text-white"
                }`}
                ></BsNewspaper>
            </p>
          </div>
          {/* <p
            onClick={handleAllReviews}
            className={`${
              reviews && "flex  bg-secondary   items-center  "
            } text-white text-sm flex cursor-pointer rounded-lg  items-center border mb-2 border-secondary p-2`}
          >
            Manage Reviews
            <MdOutlinePreview
              className={`mx-4 h-6 w-6 text-secondary ${
                reviews && "text-white"
              }`}
            ></MdOutlinePreview>
          </p> */}

          <div
            className={`${
              reviews &&"bg-secondary"
            } text-white flex items-center text-sm cursor-pointer rounded-md   border mb-2 border-secondary p-2`}
          >
            <p  onClick={handleAllReviews}>ManageReviews</p>

            <p>
            <MdOutlinePreview
                className={`mx-2 h-6 w-6 text-secondary ${
                  reviews &&"text-white"
                }`}
                ></MdOutlinePreview>
            </p>
          </div>


        </aside>

        <main className="w-full text-center">
          {blogPosts && <OurBlogPost></OurBlogPost>}
          {uploadProduct && <UploadProduct></UploadProduct>}
          {manageProduct && <ManageProducts> </ManageProducts>}
          {manageUser && <ManageUsers> </ManageUsers>}
          {allBlog && <AllBlogs></AllBlogs>}
          {reviews && <ManageReviews />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
