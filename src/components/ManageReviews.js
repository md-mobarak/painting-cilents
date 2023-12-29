/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const renderStars = (rating) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <span key={index}>&#9733;</span>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={index + rating}>&#9734;</span>
  ));

  return (
    <div className="text-yellow-400 text-xl">
      {filledStars}
      {emptyStars}
    </div>
  );
};
const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(7);

  useEffect(() => {
    fetch(
      `https://painting-server-9.vercel.app/api/v1/review?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [reviews]);

  if (!reviews) {
    return (
      <div className="flex justify-center my-20 items-center">
        <span className="loading loading-infinity w-16   text-secondary loading-xl"></span>
      </div>
    );
  }

  const handleReviewDelete = (Id) => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    try {
      fetch(`https://painting-server-9.vercel.app/api/v1/review/${Id}`, {
        method: "DELETE",
        headers: headers,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete review. Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            toast.success("Successfully Deleted Service", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          // Handle success if needed
        })
        .catch((err) => {
          if (err) {
            toast.error("You are not addmin", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      if (error) {
        toast.error("You are not addmin", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < reviews.meta.totalPage) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold lg:text-4xl text-xl text-primary">
        Product Reviews
      </h1>
      <div className="lg:grid grid-cols-3 gap-4 p-10">
        {reviews?.review?.map((r) => {
          const rating = r.rating;
          return (
            <div className="flex justify-center lg:block">
              <div className="card w-auto my-4 shadow-xl p-3 border border-secondary">
                <h3 className="text-xl  font-semibold">Name: jhone deo</h3>
                <h4 className="flex items-center my-2 justify-start ">
                  <span className="text-xl font-semibold text-primary">
                    Rating:
                  </span>
                  {renderStars(rating)}
                </h4>
                <p className="text-justify">
                  Comments: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Omnis molestias maiores officiis labore cumque nemo ipsa
                  commodi qui quod recusandae autem sunt delectus minima
                  adipisci, explicabo accusamus quo. Qui, eaque.
                </p>
                <button
                  onClick={() => handleReviewDelete(r.id)}
                  className="btn btn-error bg-red-500 btn-xs text-white"
                >
                  DElete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          className="join-item btn btn-primary btn-xs text-white"
        >
          Previous
        </button>
        <span className="mx-3 font-semibold">Page Number: {page}</span>
        <button
          onClick={handleNextPage}
          className="join-item btn btn-primary btn-xs text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageReviews;
