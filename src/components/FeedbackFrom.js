const FeedbackFrom = () => {
  return (
    <div>
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
        <div className="card hero-text bg-glass flex-shrink-0 w-full max-w-sm border-2 border-yellow-300 ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input border border-green-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
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
                <span className="label-text ">Feedback</span>
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
