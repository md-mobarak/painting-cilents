/* eslint-disable @next/next/no-img-element */
import { AiFillFormatPainter } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";

const ExperiencedPainters = () => {
  return (
    <div className=" lg:my-20 my-8 font-serif lg:flex gap-10 items-center text-black">
      <section>
        <h1 className="text-3xl font-semibold text-primary">
          We believe that a fresh coat of paint can transform any space.
        </h1>
        <p className="text-[#9996B5] lg:my-4">
          We are fully licensed and insured, so you can have peace of mind
          knowing that your property is in good hands. We also offer competitive
          pricing for our services without compromising on quality. We are a
          locally owned and operated business. We are proud to serve our
          community and have built strong relationships with our clients over
          the years.
        </p>
        <div className="divider">
          <AiFillFormatPainter className="h-14 w-14 text-secondary"></AiFillFormatPainter>
        </div>
        <div className="flex items-center">
          <div className="bg-[#F1F0FB] p-4 rounded-full mr-4">
            <HiUserGroup className="h-10  w-10 text-primary"></HiUserGroup>
          </div>
          <div>
            <h3 className="text-primary lg:text-2xl">Experienced Painters</h3>
            <p className="text-[#9996B5]">
              Our team of skilled and experienced painters are experts in their
              craft and can provide quality workmanship for your painting
              project.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-4 lg:mt-5">
          <div className="bg-[#F1F0FB] p-4 rounded-full mr-4">
            <FiSettings className="h-10 w-10 text-primary"></FiSettings>
          </div>
          <div>
            <h3 className="text-primary lg:text-2xl">Customized Solutions</h3>
            <p className="text-[#9996B5]">
              We know that every project is different, so we work closely with
              our clients to create solutions that fit their needs and vision.
            </p>
          </div>
        </div>
        <button className="btn btn-primary w-full my-4 text-white">
          ABOUT
        </button>
      </section>
      <section>
        <img
          className="lg:w-[2000px] lg:h-[600px] w-full h-full  p-3 shadow-xl rounded-xl "
          src="https://www.paintsplatter.oxacor.com/wp-content/uploads/paint-roller-to-paint-1024x682.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default ExperiencedPainters;
