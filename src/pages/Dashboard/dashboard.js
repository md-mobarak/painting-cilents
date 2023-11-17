/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */

import AllBlogs from "@/components/AllBlogs";
import ManageProducts from "@/components/ManageProducts";
import ManageReviews from "@/components/ManageReviews";
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

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleUploadProduct = () => {
    setUploadProduct(true);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(false)
    setAllBlog(false)
    setReviews(false)
  };
  const handleManageProduct = () => {
    setUploadProduct(false);
    setManageProduct(true);
    setBlogPosts(false);
    setManageUser(false);
    setAllBlog(false)
      setReviews(false)
  };
  const handleMangeUser = () => {
    setUploadProduct(false);
    setManageProduct(false);
    setBlogPosts(false);
    setManageUser(true);
        setAllBlog(false)
        setReviews(false)
  };
  const handleBlogPost = () => {
    setUploadProduct(false);
    setManageProduct(false);
    setBlogPosts(true);
    setManageUser(false);
    setAllBlog(false)
    setReviews(false)
  };
  const handleAllBlog = () => {
    setUploadProduct(false);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(true)
    setReviews(false)
  };
  const handleAllReviews = () => {
    setUploadProduct(false);
    setBlogPosts(false);
    setManageProduct(false);
    setManageUser(false);
    setAllBlog(false)
    setReviews(true)
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-secondary bg-neutral py-3 w-full font-bold text-3xl">
        Admin
      </h1>
      <div className="flex ">
        <aside className={`w-64 bg-neutral px-1 py-2 h-screen `}>
          <p
            onClick={handleMangeUser}
            className={`${
              manageUser &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage User
            <PiUsersFour
              className={`mx-4 h-6 w-6 text-secondary ${
                manageUser && "text-white"
              }`}
            ></PiUsersFour>
          </p>
          <p
            onClick={handleAllBlog}
            className={`${
              allBlog &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage Blog
            <MdOutlineManageAccounts
              className={`mx-4 h-6 w-6 text-secondary ${
                allBlog && "text-white"
              }`}
            ></MdOutlineManageAccounts>
          </p>

          <p
            onClick={handleUploadProduct}
            className={`${
              uploadProduct &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Service Upload
            <RiChatUploadFill
              className={`mx-4 h-6 w-6 text-secondary ${
                uploadProduct && "text-white"
              }`}
            ></RiChatUploadFill>
          </p>
          <p
            onClick={handleManageProduct}
            className={`${
              manageProduct &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage Service
            <FcManager className={`mx-4 h-6 w-6 text-secondary`}></FcManager>
          </p>
        
          <p
        onClick={handleBlogPost}
            className={`${
              blogPosts &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Blog Post
            <BsNewspaper
              className={`mx-4 h-6 w-6 text-secondary ${
                blogPosts && "text-white"
              }`}
            ></BsNewspaper>
          </p>
          <p
        onClick={handleAllReviews}
            className={`${
              reviews &&
              "text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3"
            } text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage Reviews
            <MdOutlinePreview
              className={`mx-4 h-6 w-6 text-secondary ${
                reviews && "text-white"
              }`}
            ></MdOutlinePreview>
          </p>
        </aside>

        <main className="w-full text-center">
          {blogPosts && <OurBlogPost></OurBlogPost>}
          {uploadProduct && <UploadProduct></UploadProduct>}
          {manageProduct && <ManageProducts> </ManageProducts>}
          {manageUser && <ManageUsers> </ManageUsers>}
          {allBlog && <AllBlogs></AllBlogs>}
          {reviews && <ManageReviews/>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
