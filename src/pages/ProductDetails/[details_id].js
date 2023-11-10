// import { singleUser } from "@/components/utils/singleUser";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";

/* eslint-disable @next/next/no-img-element */
const ProductDetails = ({ data }) => {
  const serviceId = data?.data?.id;
  // console.log(data.data.id);
  const quantity = 1;

  const handleCartPost = () => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("http://localhost:5000/api/v1/profile", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const userId = data?.data?.id;
        if (data.success === true) {
          const cartData = {
            serviceId,
            quantity,
            userId,
          };
          axios
            .post("http://localhost:5000/api/v1/cart", cartData, { headers })
            .then((res) => {
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  return (
    <div className="p-20  font-serif">
      <div className="lg:grid grid-cols-2 space-x-5 items-center">
        <img className="rounded-xl" src={data?.data?.images} alt="" />
        <div className="my-5 lg:my-0">
          <h1 className="text-secondary text-3xl font-bold text-center">
            Title: {data.data.title}
          </h1>
          <p className="text-black text-xl lg:my-4 text-center">
            Description: {data.data.description}
          </p>
          <p className="text-black text-xl  text-center">
            Available:{" "}
            <span className="text-green-600 font-bold">
              {data.data.available === true ? "in-stock" : "out-of-stock"}
            </span>
          </p>
          {/* {data.data.available === true ? <p>in Stock</p>:<p>} */}
          <div className="flex justify-center space-x-5 my-5">
            <button
              onClick={handleCartPost}
              className="btn  btn-primary btn-xs text-white"
            >
              Add To Cart
            </button>
            <button className="btn btn-primary btn-xs text-white">
              Booking Service
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center font-bold lg:text-4xl text-xl text-primary">
          Product Reviews
        </h1>
        <div className="flex justify-center lg:block">
          <div className="card w-96 my-8 shadow-xl p-5 border border-green-500">
            <h3 className="text-xl  font-semibold">Name: jhone deo</h3>
            <h4 className="flex items-center my-4 justify-start ">
              <span className="text-xl font-semibold text-primary">
                {" "}
                Rating:
              </span>{" "}
              <AiFillStar className="text-yellow-500 h-5 w-5"></AiFillStar>
              <AiFillStar className="text-yellow-500 h-5 w-5"></AiFillStar>
              <AiFillStar className="text-yellow-500 h-5 w-5"></AiFillStar>
              <AiFillStar className="text-yellow-500 h-5 w-5"></AiFillStar>
              <AiFillStar className="text-yellow-500 h-5 w-5"></AiFillStar>
            </h4>
            <p className="text-justify">
              Comments: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis molestias maiores officiis labore cumque nemo ipsa commodi
              qui quod recusandae autem sunt delectus minima adipisci, explicabo
              accusamus quo. Qui, eaque.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-center my-4 font-bold lg:text-4xl text-xl text-primary">
            Submit Your Openion
          </h1>

          <form className="border border-info p-5 rounded-xl">
            <div className="flex items-center justify-around gap-x-5">
              <select
                className="select select-info w-full max-w-xs border border-green-500"
                id="rating"
                name="rating"
              >
                <option value="1" selected disabled>
                  Rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <textarea
                className="textarea w-full textarea-info"
                placeholder="Type Your Comments"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button className="btn btn-info text-white w-10/12">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// Define the getServerSideProps function
export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const id = params?.details_id;
    // Fetch data from an API or any other data source
    const res = await fetch(`http://localhost:5000/api/v1/painting/${id}`);

    if (!res?.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    // Return the data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {}, // You can provide a default value or appropriate error handling here
      },
    };
  }
}
