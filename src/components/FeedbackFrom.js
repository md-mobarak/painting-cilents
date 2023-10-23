const FeedbackFrom = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <div className="mb-10 text-primary">
        <h1 className="text-5xl font-serif font-semibold text-center uppercase">
          Free Estimate
        </h1>
        <p className=" font-serif text-center my-2">
          Please share your details below and we will get in touch with you
          soon.
        </p>
      </div>
      <div className="hero-image rounded-xl ">
        <div className="card hero-text  bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-lg bg-opacity-40 flex-shrink-0 w-10/12 max-w-sm ">
          <form
            className="card-body "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your Name"
                className="input border border-green-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type your Email"
                className="input border border-green-500"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Feedback</span>
              </label>
              <textarea
                className="textarea border border-green-500"
                placeholder="Feedback"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent border-none text-white bg-green-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFrom;
