/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useRouter } from "next/router";
import { AiFillFormatPainter } from "react-icons/ai";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { toast } from "react-toastify";

const OurServices = (data) => {
  const serviceData = data?.data?.data?.data
  // console.log(data);
  const router = useRouter();
  const { pathname } = router;
  const handleNavigate = (id) => {
    // console.log(id);
    router.push(`/ProductDetails/${id}`);
  };
  const handleNavigateService = (id) => {
    // console.log(id);
    router.push(`/services`);
  };
  const handleCartPost = (id) => {
    const serviceId = id;
    const quantity = 1;
    const token = localStorage.getItem("accessToken");
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
        // console.log(data);
        const userId = data?.data?.id;
        if (data.success === true) {
          const cartData = {
            serviceId,
            quantity,
            userId,
          };
          axios
            .post(
              "https://painting-server-9.vercel.app/api/v1/cart",
              cartData,
              { headers }
            )
            .then((res) => {
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
              // console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };
  

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
      <section className="lg:block flex justify-center items-center">

      {serviceData ?.length === 0 ||
          !serviceData ?.length ? (
            <div className="flex justify-center my-20 items-center">
              <span className="loading loading-infinity w-16   text-secondary loading-xl"></span>
            </div>
          ) :     <section className="lg:grid  grid-cols-3 gap-5 font-serif ">
          {
            serviceData ?.slice(0, 6)?.map((p) => {
              return (
             <div className="mx-auto ">
                 <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-bottom"
                  className="card card-compact w-96 text-black my-10  lg:my-5 lg:my-0 bg-base-100 shadow-xl"
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
                      <button
                        onClick={() => handleCartPost(p.id)}
                        className="btn btn-secondary btn-xs text-white"
                      >
                        Add To Cart
                      </button>
                      <button
                        onClick={() => handleNavigate(p.id)}
                        className="btn btn-secondary  btn-xs text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
             </div>
              );
            })
          }
        </section>}

        {/* <section className="lg:grid  grid-cols-3 gap-5 font-serif ">
          {
            serviceData ?.slice(0, 6)?.map((p) => {
              return (
             <div className="mx-auto ">
                 <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-bottom"
                  className="card card-compact w-96 text-black my-10  lg:my-5 lg:my-0 bg-base-100 shadow-xl"
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
                      <button
                        onClick={() => handleCartPost(p.id)}
                        className="btn btn-secondary btn-xs text-white"
                      >
                        Add To Cart
                      </button>
                      <button
                        onClick={() => handleNavigate(p.id)}
                        className="btn btn-secondary  btn-xs text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
             </div>
              );
            })
          }
        </section> */}
      </section>
      <div className="flex justify-end my-4 lg:my-8 ">
        <button
          onClick={handleNavigateService}
          className=" text-secondary lg:mx-9 flex items-center"
        >
          See More
          <FaArrowAltCircleRight className="mx-2 w-6 lg:w-8 h-6 lg:h-8"></FaArrowAltCircleRight>
        </button>
      </div>
    </div>
  );
};

export default OurServices;
