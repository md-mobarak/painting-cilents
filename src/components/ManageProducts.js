/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useState ,useEffect} from "react";

const ManageProducts = () => {
  const [serviceData, setServiceData] = useState();
    useEffect(() => {
     // console.log(serviceData);
  fetch("http://localhost:5000/api/v1/painting/service")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    setServiceData(data);
  })
  .catch((err) => {
    console.log(err);
  });
  },[])
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold uppercase mt-3">
        Mange Product Product
      </h1>
      <section className="lg:grid  grid-cols-3 p-10 gap-5 font-serif">
        {serviceData?.data?.map((p) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              className="card  border border-neutral card-compact w-64 text-black  bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-[250px] h-[200px] rounded-xl p-2"
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
                    // onClick={() => handleCartPost(p.id)}
                    className="btn btn-neutral btn-xs text-white"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => handleNavigate(p.id)}
                    className="btn btn-neutral btn-xs text-white"
                  >
                    Details
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

export default ManageProducts;
