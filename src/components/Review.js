/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components

// Import Swiper styles
import { AiFillFormatPainter } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';

// import required modules

/* eslint-disable @next/next/no-img-element */
const Review = () => {
  return (
    <div className="lg:my-20 my-10 font-serif">
      <h1 className="uppercase text-center text-4xl lg:my-10 font-semibold text-primary">
        Reviews
      </h1>
      <div className="lg:grid grid-cols-2 gap-10 lg:p-10">
        <section
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="lg:text-4xl lg:font-bold font-semibold text-primary text-center">
            Customer Testimonials
          </h1>
          <p className=" text-[#9996B5] text-center text-xl my-3">
            From small repairs to large commercial projects, our skills and
            customer service exceed expectations. Discover why our customers
            love us!
          </p>
          <div className="divider">
            <AiFillFormatPainter className="h-14 w-14 text-secondary "></AiFillFormatPainter>
          </div>
          <div>
            <div className="p-4">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <p className=" bg-[#e0e0e0] px-4 py-3 text-primary text-center text-xl my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, sint quibusdam. Doloremque blanditiis facilis
                      mollitia quibusdam ducimus eaque. Aliquid consectetur
                      libero explicabo. Unde quis, rerum eaque voluptatem minus
                      asperiores cupiditate.
                    </p>
                    <div className="flex items-center justify-center my-4">
                      <div className="avatar">
                        <div className="w-24 rounded-full flex items-center">
                          <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1698164605~exp=1698165205~hmac=896b070dc864c54aac0a9d54cd58531615f6da1f953a8ce5206bd671851be1e0" />
                        </div>
                      </div>
                      <p className="text-black mx-8">Jhone Deu</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <p className=" bg-[#e0e0e0] px-4 py-3 text-primary text-center text-xl my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, sint quibusdam. Doloremque blanditiis facilis
                      mollitia quibusdam ducimus eaque. Aliquid consectetur
                      libero explicabo. Unde quis, rerum eaque voluptatem minus
                      asperiores cupiditate.
                    </p>
                    <div className="flex items-center justify-center my-4">
                      <div className="avatar">
                        <div className="w-24 rounded-full flex items-center">
                          <img src="https://img.freepik.com/premium-photo/attractive-blond-bearded-man-white-t-shirt-using-wireless-earphones_1258-6765.jpg?size=626&ext=jpg" />
                        </div>
                      </div>
                      <p className="text-black mx-8">Jhone Deu</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <p className=" bg-[#e0e0e0] px-4 py-3 text-primary text-center text-xl my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, sint quibusdam. Doloremque blanditiis facilis
                      mollitia quibusdam ducimus eaque. Aliquid consectetur
                      libero explicabo. Unde quis, rerum eaque voluptatem minus
                      asperiores cupiditate.
                    </p>
                    <div className="flex items-center justify-center my-4">
                      <div className="avatar">
                        <div className="w-24 rounded-full flex items-center">
                          <img src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=740&t=st=1698164635~exp=1698165235~hmac=c99e92e0f9f210c0e949d383138cd2c6082abe5d178f4972ae04ee0dd6ab7524" />
                        </div>
                      </div>
                      <p className="text-black mx-8">Jhone Deu</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img
            className="w-auto h-auto rounded-xl shadow-xl"
            src="https://www.paintsplatter.oxacor.com/wp-content/uploads/painting-the-walls-768x512.jpg"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Review;
