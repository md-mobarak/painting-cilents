/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [isBlur, setIsBlur] = useState(false);
  return (
    <div className="flex justify-between font-serif items-center lg:p-x-8 lg:p-4 uppercase cursor-pointer lg:font-bold text-secondary ">
      <div>
        <img
          className="w-auto h-10"
          src="https://www.paintsplatter.oxacor.com/wp-content/uploads/Paint-Splatter-Logo-1.png"
          alt=""
        />
      </div>
      <div>
        <ul className="flex items-center justify-around space-x-8">
          <li
          // onMouseEnter={() => setIsBlur(!isBlur, console.log("mouseEnter"))}
          // onMouseLeave={() => setIsBlur(!isBlur, console.log("mouseLeave"))}
          // className={`hover:text-primary ${!isBlur === "text-primary"}  ${
          //   !isBlur === "text-error"
          // }`}
          >
            Home
          </li>
          <li
          // onMouseEnter={() => setIsBlur(!isBlur, console.log("mouseEnter"))}
          // onMouseLeave={() => setIsBlur(!isBlur, console.log("mouseLeave"))}
          // className={`hover:text-primary ${!isBlur === "text-primary"}  ${
          //   !isBlur === "text-error"
          // }`}
          >
            Service
          </li>
          <li className="hover:text-primary">About us</li>
          <li className="hover:text-primary">Contact us</li>
          <li className="hover:text-primary">Blog</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center justify-around space-x-8">
          <li className="hover:text-primary">Cart</li>
          <li className="hover:text-primary">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
