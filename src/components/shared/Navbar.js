/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  // const [isBlur, setIsBlur] = useState(false);
  const { pathname } = useRouter();
  // console.log(pathname)
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState(""); // Use state to manage token
  const router = useRouter();
  const [user, setUser] = useState({});
  const [toggleUser, setToggleUser] = useState(false);
  // console.log(user);
  useEffect(() => {
    // Your API request logic using 'token'
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
        setUser(data);
      })
      .catch((err) => {
        // Handle errors gracefully, e.g., display an error message
        console.log(err);
      });
  }, [token, user]);

  useEffect(() => {
    const localToken = localStorage.getItem("accessToken");
    if (localToken) {
      setToken(localToken);
    }
  }, [user, token]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setToken(""); // Update the token state
    router.push("/login");
    setToggleUser(false);
  };

  return (
    <nav>
      <div className="flex  justify-between font-serif items-center lg:p-x-8 lg:p-4 uppercase cursor-pointer lg:font-bold text-secondary ">
        <div className="hidden lg:block">
          <Link href="/">
            <img
              className="w-auto h-10"
              src="https://www.paintsplatter.oxacor.com/wp-content/uploads/Paint-Splatter-Logo-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-around space-x-8">
          <Link href="/">
            <li
              className={`hover:text-primary ${
                pathname === "/" && "text-primary"
              }`}
            >
              Home
              </li>
              </Link>
              <Link href="/services">
            <li
              className={`hover:text-primary ${
                pathname === "/services" && "text-primary"
              }`}
            >
              Service
            </li>
            </Link>
            <Link href="/about">
            <li
              className={`hover:text-primary ${
                pathname === "/about" && "text-primary"
              }`}
            >
              About us
            </li>
            </Link>
            <Link href="/contact">
            <li
              className={`hover:text-primary ${
                pathname === "/contact" && "text-primary"
              }`}
            >
              Contact us
            </li>
            </Link>
            <Link href="/blogs">
            <li
              className={`hover:text-primary ${
                pathname === "/blogs" && "text-primary"
              }`}
            >
              Blog
            </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-around space-x-8">
            <li className="hover:text-primary">
              <Link href="/cartItem">
                <FaCartArrowDown
                  className={`hover:text-primary h-5 w-5 ${
                    pathname === "/cartItem" && "text-primary"
                  }`}
                ></FaCartArrowDown>
              </Link>
            </li>
            <li className="hover:text-primary">
              {token ? (
                <div>
                  <img
                    onClick={() => setToggleUser(!toggleUser)}
                    className="rounded-full w-8 h-8"
                    src={user?.data?.profileImg}
                    alt=""
                  />
                </div>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      {toggleUser && (
        <div className="z-40 absolute right-5  ">
          <div className=" rounded-lg w-40 cursor-pointer  text-center  p-3 shadow-lg text-white bg-gradient-to-tr from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-600 ">
            <ul>
              <li className="hover:text-secondary">
                <Link href="/Dashboard/dashboard">Dashboard</Link>
              </li>
              <li className="hover:text-secondary">   <Link href="/profile">My profile</Link></li>

              <li className="hover:text-secondary">
                <Link onClick={() => logOut()} href="/login">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* mobile responsive  navbar  */}
      <div className="block lg:hidden p-3">
        <div className="flex justify-between items-center">
          <img
            className="w-auto h-6"
            src="https://www.paintsplatter.oxacor.com/wp-content/uploads/Paint-Splatter-Logo-1.png"
            alt=""
          />
          <div>
            {!toggle ? (
              <RxHamburgerMenu
                data-aos="flip-left"
                onClick={() => setToggle(!toggle)}
                className="text-secondary h-8 w-8 font-bold"
              ></RxHamburgerMenu>
            ) : (
              <RxCross2
                data-aos="flip-left"
                onClick={() => setToggle(!toggle)}
                className="text-red-500 h-8 w-8 font-bold"
              ></RxCross2>
            )}
          </div>
        </div>
        {toggle && (
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=" text-secondary"
          >
            <div className="flex justify-center items-center">
              {user?.data?.profileImg && (
                <img
                  className="rounded-full w-16 h-16"
                  src={user?.data?.profileImg}
                  alt=""
                />
              )}
            </div>
            <p className=" text-center ">Home</p>
            <p className=" text-center">Service</p>
            <p className=" text-center">About us</p>
            <p className=" text-center">Contact us</p>
            <p className=" text-center">Blog</p>

            <p className="text-center">
              {token ? (
                <Link onClick={() => logOut()} href="/login">
                  Log Out
                </Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
