/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const News = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="font-serif my-20 ">
      <h1 className="text-center font-semibold my-14 text-primary lg:text-4xl text-2xl">
        NEWS
      </h1>
      <div>
        <div className="hidden lg:block">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this?.props?.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <img
                src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-4.jpg"
                alt=""
              />
              <div className="flex justify-center p-2 text-black">
                <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                  <div className="card-body">
                    <h2 className="card-title text-green-500">
                      House Painting
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, laudantium. Et illum repudiandae quae maiores...
                    </p>
                    <div className="flex justify-around space-x-3">
                      <small className="text-green-500">Ink Paint</small>
                      <small>16-10-2022</small>
                      <small> 1 comment</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog5.jpg"
                alt=""
              />
              <div className="flex justify-center p-2 text-black">
                <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                  <div className="card-body">
                    <h2 className="card-title text-green-500">
                      House Painting
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, laudantium. Et illum repudiandae quae maiores...
                    </p>
                    <div className="flex justify-around space-x-3">
                      <small className="text-green-500">Ink Paint</small>
                      <small>16-10-2022</small>
                      <small> 1 comment</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-3.jpg"
                alt=""
              />
              <div className="flex justify-center p-2 text-black">
                <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                  <div className="card-body">
                    <h2 className="card-title text-green-500">
                      House Painting
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, laudantium. Et illum repudiandae quae maiores...
                    </p>
                    <div className="flex justify-around space-x-3">
                      <small className="text-green-500">Ink Paint</small>
                      <small>16-10-2022</small>
                      <small> 1 comment</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-2.jpg"
                alt=""
              />
              <div className="flex justify-center p-2 text-black">
                <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                  <div className="card-body">
                    <h2 className="card-title text-green-500">
                      House Painting
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, laudantium. Et illum repudiandae quae maiores...
                    </p>
                    <div className="flex justify-around space-x-3">
                      <small className="text-green-500">Ink Paint</small>
                      <small>16-10-2022</small>
                      <small> 1 comment</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          ;
        </div>
        <div className=" lg:grid-cols-4 gap-4 lg:hidden">
          <div>
            <img
              src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-4.jpg"
              alt=""
            />
            <div className="flex justify-center p-2 text-black">
              <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                <div className="card-body">
                  <h2 className="card-title text-green-500">House Painting</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, laudantium. Et illum repudiandae quae maiores...
                  </p>
                  <div className="flex justify-around space-x-3">
                    <small className="text-green-500">Ink Paint</small>
                    <small>16-10-2022</small>
                    <small> 1 comment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog5.jpg"
              alt=""
            />
            <div className="flex justify-center p-2 text-black">
              <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                <div className="card-body">
                  <h2 className="card-title text-green-500">House Painting</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, laudantium. Et illum repudiandae quae maiores...
                  </p>
                  <div className="flex justify-around space-x-3">
                    <small className="text-green-500">Ink Paint</small>
                    <small>16-10-2022</small>
                    <small> 1 comment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-3.jpg"
              alt=""
            />
            <div className="flex justify-center p-2 text-black">
              <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                <div className="card-body">
                  <h2 className="card-title text-green-500">House Painting</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, laudantium. Et illum repudiandae quae maiores...
                  </p>
                  <div className="flex justify-around space-x-3">
                    <small className="text-green-500">Ink Paint</small>
                    <small>16-10-2022</small>
                    <small> 1 comment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-2.jpg"
              alt=""
            />
            <div className="flex justify-center p-2 text-black">
              <div className="card mt-[-50px] bg-base-100 shadow-xl rounded-none">
                <div className="card-body">
                  <h2 className="card-title text-green-500">House Painting</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, laudantium. Et illum repudiandae quae maiores...
                  </p>
                  <div className="flex justify-around space-x-3">
                    <small className="text-green-500">Ink Paint</small>
                    <small>16-10-2022</small>
                    <small> 1 comment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
