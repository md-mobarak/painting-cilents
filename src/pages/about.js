/* eslint-disable @next/next/no-img-element */
import { AiFillFormatPainter } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaShapes } from "react-icons/fa";
import { FaLinkedin, FaPalette, FaSquareFull } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
const about = () => {
  return (
    <div className="font-serif">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/gallery2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-40 backdrop-filter backdrop-blur-sm">
          <h1 className="text-4xl pt-20 text-center font-bold text-secondary ">
            About Us
          </h1>
          <p className="text-center text-xl my-8 text-white">
            We have everything you need to bring your vision to life, from our
            expert painters to our dedication to customer satisfaction.
          </p>
          <div className="divider">
            <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between space-10 my-20 ">
        <section className="p-6 my-10 w-10/12">
          <h1 className="text-4xl font-bold text-primary">
            We ll help you design a space you ll love for years.
          </h1>
          <p>
            We re committed to giving you a service you can count on, whether
            you just want to update one room or do a big renovation. We believe
            that dependability is the key to any projects success, and we want
            to earn your trust and business by giving you reliable and excellent
            service.
          </p>
          <div className="lg:grid grid-cols-2 gap-x-5 my-5 bg-indigo-100 p-5 rounded-xl">
            <div className="flex items-center mt-2  ">
              <p className="bg-indigo-500 mx-2 p-5 rounded-full">
                <GoStarFill className="h-5 w-5 text-white"></GoStarFill>
              </p>
              <div>
                <h1 className="text-xl text-secondary font-semibold">
                  High-Quality Paints and Materials
                </h1>
                <p>
                  We only use the best paints and materials, so your walls and
                  other surfaces will look great and last for a long time.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 ">
              <p className="bg-indigo-500 mx-2 p-5 rounded-full">
                <FaSquareFull className="h-5 w-5 text-white"></FaSquareFull>
              </p>
              <div>
                <h1 className="text-xl text-secondary font-semibold">
                  High-Quality Paints and Materials
                </h1>
                <p>
                  We only use the best paints and materials, so your walls and
                  other surfaces will look great and last for a long time.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 ">
              <p className="bg-indigo-500 mx-2 p-5 rounded-full">
                <FaShapes className="h-5 w-5 text-white"></FaShapes>
              </p>
              <div>
                <h1 className="text-xl text-secondary font-semibold">
                  High-Quality Paints and Materials
                </h1>
                <p>
                  We only use the best paints and materials, so your walls and
                  other surfaces will look great and last for a long time.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 ">
              <p className="bg-indigo-500 mx-2 p-5 rounded-full">
                <FaPalette className="h-5 w-5 text-white"></FaPalette>
              </p>
              <div>
                <h1 className="text-xl text-secondary font-semibold">
                  High-Quality Paints and Materials
                </h1>
                <p>
                  We only use the best paints and materials, so your walls and
                  other surfaces will look great and last for a long time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-6/12">
          <img
            className="rounded-xl"
            src="https://largeartcanvas.com/cdn/shop/products/Canvas_painting_Extra_large_wall_art_Big_canvas_art_L652-6_1500x.jpg?v=1572244505"
            alt=""
          />
        </section>
      </div>
      <section className="px-16 my-20 lg:flex justify-around items-center">
        <div className="border-l-2 border-indigo-200">
          <h3 className="ml-4 text-3xl">Our Mission</h3>
          <p className="ml-4 text-indigo-400 my-4">
            Our mission is to deliver quality workmanship and exceptional
            customer service to every client. We believe that every space has
            the potential to be transformed into something beautiful and
            functional, and we are committed to making that transformation a
            reality.
          </p>
        </div>
        <div className=" border-l-2 border-indigo-200">
          <h3 className="ml-4 text-3xl">Our Vision</h3>
          <p className="ml-4 text-indigo-400 my-4">
            Our goal is to become your go-to resource for all of your painting
            requirements, whether they are domestic or professional. We want to
            give our clients excellent service, quality work, and a stress-free
            experience that goes above and beyond what they expect.
          </p>
        </div>
      </section>
      <section className="my-20 px-10">
        <h1 className="text-3xl font-bold text-center text-primary">
          Our Team
        </h1>
        <p className="text-xl text-center my-8 text-gray-400">
          From our friendly office staff to our skilled painters, everyone on
          our team works hard to get great results.
        </p>
        <div className="divider my-8">
          <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
        </div>
        <div className="lg:grid grid-cols-4 gap-10">
          <div className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://img.freepik.com/premium-photo/businessman-table_88340-4417.jpg?w=740"
              alt="Person's photo"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <div className="flex mt-4">
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
                <a href="#" className="text-purple-500 hover:underline mr-4">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://img.freepik.com/free-photo/positive-teacher-posing-with-open-notebook_114579-77678.jpg?w=740&t=st=1708604181~exp=1708604781~hmac=45f0a9fb12094b6e5de1b21bce320f4314633a289dad242c4f44313fdbab8b5e"
              alt="Person's photo"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <div className="flex mt-4">
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
                <a href="#" className="text-purple-500 hover:underline mr-4">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1708604240~exp=1708604840~hmac=3bcb4d2e4d4908deda1f8569e8c9c7886fd039829fdd4fb4bc60e62bd37ed215"
              alt="Person's photo"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <div className="flex mt-4">
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
                <a href="#" className="text-purple-500 hover:underline mr-4">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911843.jpg?w=740&t=st=1708604287~exp=1708604887~hmac=d33043600c99f3e88e53d8007b2184ea33ea2bf1300b0f781c3b96158c77de01"
              alt="Person's photo"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <div className="flex mt-4">
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
                <a href="#" className="text-purple-500 hover:underline mr-4">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="text-blue-500 hover:underline mr-4">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-20 lg:flex items-center justify-around space-x-10 bg-indigo-100">
        <div className="w-10/12">
          <img
            className="rounded-xl"
            src="https://images.meesho.com/images/products/275261037/dpqx0_512.webp"
            alt=""
          />
        </div>
        <div className="w-8/12">
          <h1 className="text-center text-4xl font-bold text-indigo-400">
            Satisfaction Guarantee
          </h1>
          <p className="text-center text-2xl font-bold text-indigo-300">
            We are always focused on making sure our customers are happy. We
            wont stop working until you are happy with what we have done.
          </p>
          <div className="divider">
            <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
          </div>
          <p>
            We believe that customer satisfaction is the foundation of our
            business. We strive to provide the highest quality painting services
            possible, and we stand behind every job we complete with our
            satisfaction guarantee. We understand that entrusting your space to
            someone else can be a big decision. Thats why we want to ensure that
            you are completely satisfied with the end result of our work. Our
            goal is to ensure that you are happy with the end result of your
            painting project, and we will not rest until you are completely
            satisfied.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
