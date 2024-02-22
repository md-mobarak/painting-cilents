import { AiFillFormatPainter } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const contact = () => {
  return (
    <div className="font-serif">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://st4.depositphotos.com/7656456/26891/i/450/depositphotos_268916802-stock-photo-modern-abstraction-painting-wall-art.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-40 backdrop-filter backdrop-blur-sm">
          <h1 className="text-4xl pt-20 text-center font-bold text-secondary ">
            Contact Us
          </h1>
          <p className="text-center text-xl my-8 text-white">
            We have everything you need to bring your vision to life, from our
            expert painters to our dedication to customer satisfaction
          </p>
          <div className="divider">
            <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-bottom"
        className=" lg:grid grid-cols-2 p-10 my-20 space-x-10 "
      >
        <section className="mt-16">
          <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center justify-between h-32 w-full">
            <div className="flex items-center">
              <p className="bg-secondary p-4 rounded-full">
                <MdOutlineMail className="text-white h-8 w-8"></MdOutlineMail>
              </p>
              <div className="mx-5">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-2xl font-semibold"
                >
                  Email Address
                </label>
                <p id="email" className="text-gray-800 text-xl">
                  example@.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 mt-5 p-4 rounded-lg shadow-md flex items-center justify-between h-32 w-full">
            <div className="flex items-center">
              <p className="bg-secondary p-4 rounded-full">
                <FaPhone className="text-white h-8 w-8"></FaPhone>
              </p>
              <div className="mx-5">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-2xl font-semibold"
                >
                  Email Address
                </label>
                <p id="email" className="text-gray-800 text-xl">
                  example@.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 mt-5 p-4 rounded-lg shadow-md flex items-center justify-between h-32 w-full">
            <div className="flex items-center">
              <p className="bg-secondary p-4 rounded-full">
                <FaLocationDot className="text-white h-8 w-8"></FaLocationDot>
              </p>
              <div className="mx-5">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-2xl font-semibold"
                >
                  Email Address
                </label>
                <p id="email" className="text-gray-800 text-xl">
                  example@.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 mt-5 p-4 rounded-lg shadow-md flex items-center justify-between h-32 w-full">
            <div className="flex items-center">
              <p className="bg-secondary p-4 rounded-full">
                <FaClock className="text-white h-8 w-8"></FaClock>
              </p>
              <div className="mx-5">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-2xl font-semibold"
                >
                  Email Address
                </label>
                <p id="email" className="text-gray-800 text-xl">
                  example@.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-primary text-3xl font-bold ">
            Thank you for considering us for your painting needs.
          </h1>
          <p className="text-center text-sm font-bold text-gray-300 my-3">
            Our helpful team is ready to help you and will answer your question
            as soon as possible. We look forward to hearing from you and working
            with you to bring your vision to life.
          </p>
          <div className=" flex justify-center items-center my-8 lg:my-0">
            <form className="w-full p-4  border border-secondary  shadow-md rounded-lg">
              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-secondary text-sm font-bold mb-2"
                  htmlFor="details"
                >
                  Details
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-300"
                  id="details"
                  name="details"
                  placeholder="Enter details"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className=" btn btn-secondary py-2 px-4 rounded-md hover:bg-indigo-700 text-white focus:outline-none focus:border-indigo-700 w-8/12"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default contact;
