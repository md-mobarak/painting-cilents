/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { AiFillFormatPainter } from "react-icons/ai";

const OurServices = (data) => {
  // console.log(data);
  return (
    <div className="text-center font-serif lg:my-20">
      <section>
        <h1 className="lg:text-4xl lg:font-bold font-semibold text-primary text-center">
          Our Services
        </h1>
        <p className=" text-[#9996B5] text-center text-xl my-3">
          Whether you are looking to refresh your space or create a new look,
          our team can help with a range of painting services.
        </p>
        <div className="divider">
          <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
        </div>
      </section>
      <section className="lg:grid  grid-cols-3 gap-5 font-serif">
        {data?.data?.data?.data?.map((p) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              className="card card-compact w-96 text-black  bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="h-[256px] w-[384px]"
                  src={p.images}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p className="text-xl">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-between">
                  <button className="btn btn-secondary btn-xs text-white">
                    Buy Now
                  </button>
                  <button className="btn btn-secondary  btn-xs text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default OurServices;
