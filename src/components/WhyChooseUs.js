/* eslint-disable @next/next/no-img-element */

const WhyChooseUs = () => {
  return (
    <div className="font-serif ">
      <h1 className="text-center font-bold text-4xl text-primary my-10">
        Why Choose Us?
      </h1>
      <div className="lg:grid lg:grid-cols-3 gap-10 text-primary ">
        <div
          className="hover:shadow-xl "
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/faux.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">Faux Finishes</h1>
          </div>
        </div>
        <div
          className="hover:shadow-xl"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/water-proofing.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">
              Water Proofing
            </h1>
          </div>
        </div>
        <div
          className="hover:shadow-xl"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/pre-paint.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">
              Pre-Paint Demo
            </h1>
          </div>
        </div>
        <div
          className="hover:shadow-xl"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/removeal.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">
              Mildew Removal
            </h1>
          </div>
        </div>
        <div
          className="hover:shadow-xl"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/color-proof.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">Color Proof</h1>
          </div>
        </div>
        <div
          className="hover:shadow-xl"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="3000"
        >
          <div className="flex justify-center">
            <img
              src="http://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/window-washing.png"
              alt=""
            />
          </div>
          <div className="my-2">
            <h1 className="text-center text-xl font-semibold">
              Window Washing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
