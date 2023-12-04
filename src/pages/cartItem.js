/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
// import Payment from "@/components/payment/payment";
// import Payment from "@/components/payment/Payment";
import BookingDate from "@/components/BookingDate";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const cartItem = () => {
  const [showDate, setShowDate] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [allCartItem, setAllCartItem] = useState([]);
  const [checkOut, setCheckOut] = useState(false);
  // const email = cartItem?.data?.userEmail;
  // const userId = cartItem?.data?.userId;
  // console.log(allCartItem);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("https://painting-server-9.vercel.app/api/v1/user-cart", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItem(data);
        // console.log(data.data.result.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartItem]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("https://painting-server-9.vercel.app/api/v1/all-cart", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCartItem(data);
        // console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [allCartItem]);

  const deleteService = async (id) => {
    window.alert("Are you sure?");
    // console.log(id)
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    await fetch(`https://painting-server-9.vercel.app/api/v1/cart/${id}`, {
      method: "DELETE",
      "Content-Type": "application/json",
      // headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateQuantityDecrease = (id, newQuantity) => {
    const quantity = { quantity: newQuantity - 1 };
    axios
      .patch(
        `https://painting-server-9.vercel.app/api/v1/cart-update/${id}`,
        quantity
      )
      .then((response) => {
        // Handle the success response
        console.log("Update successful:", response.data);
        // You can perform other actions after a successful update
      })
      .catch((error) => {
        // Handle the error
        console.error("Update error:", error);
        // You can display an error message to the user or perform other error-handling actions
      });
  };
  const handleUpdateQuantityIncrease = (id, newQuantity) => {
    // const
    const quantity = { quantity: newQuantity + 1 };
    axios
      .patch(
        `https://painting-server-9.vercel.app/api/v1/cart-update/${id}`,
        quantity
      )
      .then((response) => {
        // Handle the success response
        console.log("Update successful:", response.data);
        // You can perform other actions after a successful update
      })
      .catch((error) => {
        // Handle the error
        console.error("Update error:", error);
        // You can display an error message to the user or perform other error-handling actions
      });
  };
  let Total = cartItem?.data?.result?.result?.map(
    (item) => Number(item.quantity) * Number(item?.service?.price)
  );
  const subTotal = Total?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let tax = subTotal * 0.1;
  let grandTotal = tax + subTotal;

  return (
    <div className="font-serif lg:p-20 p-4">
      <h1 className="text-center font-semibold text-primary lg:text-4xl uppercase">
        Your Cart
      </h1>
      <div>
        {cartItem?.data?.result?.result?.map((item) => {
          const total = item.quantity * item?.service?.price;
          return (
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              className="border p-3 my-5 shadow-xl rounded-xl cart border-secondary"
            >
              <div className="Lg:grid grid-cols-6 text-center flex justify-around  lg:gap-x-5 text-primary lg:font-semibold lg:my-2">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Booking</p>
                <p>Action</p>
              </div>
              <div className="lg:grid grid-cols-6 gap-4  lg:ml-4 my-2 lg:my-4 text-center text-secondary">
                <div className="flex items-center lg:ml-4">
                  <img
                    className="lg:h-14 lg:w-14 h-8 w-8 rounded-xl"
                    src={item?.service?.images}
                    alt=""
                  />
                  <p className="lg:mx-3 hidden lg:block">
                    {item?.service?.title}
                  </p>
                </div>
                <p className="lg:mr-8 lg:text-xl">{item?.service?.price}</p>
                <p className="border border-primary rounded-xl shadow-xl p-2 lg:flex justify-around items-center">
                  <button
                    disabled={item.quantity < 2}
                    onClick={() =>
                      handleUpdateQuantityDecrease(item?.id, item?.quantity)
                    }
                    className="btn btn-primary btn-xs text-white  "
                  >
                    -
                  </button>
                  <span className="mx-2 lg:text-xl "> {item?.quantity}</span>
                  <button
                    disabled={item.quantity > 20}
                    onClick={() =>
                      handleUpdateQuantityIncrease(item?.id, item?.quantity)
                    }
                    className="btn btn-primary btn-xs text-white "
                  >
                    +
                  </button>
                </p>

                <p className="lg:text-xl">${total}</p>
                <button
                  onClick={() => setShowDate(!showDate)}
                  className="hover:bg-secondary cursor-pointer hover:text-white border border-primary rounded-xl mt-4 btn-xs text-primary"
                >
                  Booking
                </button>
                <p
                  onClick={() => deleteService(item?.id)}
                  className="lg:text-xl flex cursor-pointer justify-center items-center"
                >
                  <RiDeleteBin6Line className="text-red-500 "></RiDeleteBin6Line>
                </p>
              </div>
            </div>
          );
        })}
        <div className="lg:flex justify-end">
          <div className="border card w-96 p-5 border-secondary shadow-2xl font-semibold rounded-xl">
            <div className="flex justify-around items-center">
              <p className="text-primary font-semibold">Subtotal:</p>
              <p className="text-secondary">${subTotal}</p>
            </div>
            <div className="flex lg:my-5  my-2 justify-around items-center">
              <p className="text-primary font-semibold">Sales Tax:</p>
              <p className="text-secondary">${tax}</p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-primary font-semibold">Grand Total:</p>
              <p className="text-secondary">${grandTotal}</p>
            </div>
            <button
              disabled={cartItem?.data?.result?.length === 0}
              onClick={() => setCheckOut(!checkOut)}
              className=" flex mt-5 text-white justify-center btn btn-secondary"
            >
              Booking
            </button>
          </div>
        </div>
      </div>
      <div>
        {checkOut && (
          <section className="relative flex justify-center items-center">
            <div className="w-96 h-44 p-5  fixed bottom-64 bg-[#4FC1DB]  shadow-2xl rounded-xl ">
              {/* <Payment
              setCheckOut={setCheckOut}
              checkOut={checkOut}
              email={email}
              grandTotal={grandTotal}
              id={userId}
            ></Payment> */}
            </div>
          </section>
        )}
      </div>
      {showDate && (
        <div className="absolute top-20 right-64">
          <BookingDate></BookingDate>
        </div>
      )}
    </div>
  );
};

export default cartItem;
