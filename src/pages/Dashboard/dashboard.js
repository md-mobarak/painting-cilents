/* eslint-disable @next/next/no-html-link-for-pages */
// import "@/styles/globals.css";
// import Link from "next/link";
import ManageProducts from "@/components/ManageProducts";
import ManageUsers from "@/components/ManageUsers";
import UploadProduct from "@/components/UploadProduct";
import { useState } from "react";
// import UploadProduct from "@/components/UploadProduct";

import { FcManager } from "react-icons/fc";
import { PiUsersFour } from "react-icons/pi";
import { RiChatUploadFill } from "react-icons/ri";
const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [uploadProduct, setUploadProduct] = useState(false);
  const [manageProduct, setManageProduct] = useState(false);
  const [manageUser, setManageUser] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleUploadProduct = () => {
    setUploadProduct(true);
    setManageProduct(false);
    setManageUser(false);
  };
  const handleManageProduct = () => {
    setUploadProduct(false);
    setManageProduct(true);
    setManageUser(false);
  };
  const handleMangeUser = () => {
    setUploadProduct(false);
    setManageProduct(false);
    setManageUser(true);
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
            className={`${manageUser &&  'text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3'} text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage User
            <PiUsersFour className={`mx-4 h-6 w-6 text-secondary ${manageUser &&"text-white"}`}></PiUsersFour>
          </p>
          <p
            onClick={handleUploadProduct}
            className={`${uploadProduct &&  'text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3'} text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            File Upload
            <RiChatUploadFill className={`mx-4 h-6 w-6 text-secondary ${uploadProduct &&"text-white"}`}></RiChatUploadFill>
          </p>
          <p
            onClick={handleManageProduct}
            className={`${manageProduct &&  'text-white flex cursor-pointer bg-secondary rounded-xl  items-center border mb-2 border-secondary p-3'} text-white flex cursor-pointer rounded-xl  items-center border mb-2 border-secondary p-3`}
          >
            Manage Product
            <FcManager className={`mx-4 h-6 w-6 text-secondary`}></FcManager>
          </p>
        </aside>

        <main className="w-full text-center">
          {uploadProduct && <UploadProduct></UploadProduct>}
          {manageProduct && <ManageProducts> </ManageProducts>}
          {manageUser && <ManageUsers> </ManageUsers>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
