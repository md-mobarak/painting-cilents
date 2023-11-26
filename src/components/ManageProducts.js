/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageProducts = () => {
  const [serviceData, setServiceData] = useState();
  const [editService, setEditService] = useState(false);
  const [serviceId, setServiceId] = useState("");
  // console.log(serviceId)
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/painting/service")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const handleDelete = (id) => {
  //   window.alert("Are you suer?");
  //   fetch(`http://localhost:5000/api/v1/painting/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.success === true) {
  //         toast.success("Successfully Deleted Service", {
  //           position: toast.POSITION.TOP_CENTER,
  //           transition: swirl,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleDelete = (Id) => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    try {
      fetch(`http://localhost:5000/api/v1/painting/${id}`, {
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
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(serviceId);
    // console.log(data);
    const price = Number(data.price);
    const updatedData = {
      title: data.title,
      images: data.images,
      category: data.category,
      description: data.description,
      price: price,
      available: data.available,
    };

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/painting/update-painting/${serviceId}`,
        updatedData
      );

      console.log("Service updated:", response.data);

      if (response.data) {
        toast.success("Successfully updated Service", {
          position: toast.POSITION.TOP_CENTER,
          transition: swirl,
        });
      }

      // Add any further actions here, like redirecting to a success page
    } catch (error) {
      console.error("Service update failed:", error);
    }

    reset();
    setEditService(!editService);
  };
  const handleEditService = (id) => {
    setServiceId(id);
    setEditService(true);
  };
  return (
    <div className="">
      {!editService && (
        <h1 className="text-center text-2xl font-bold uppercase mt-3">
          Mange Product Product
        </h1>
      )}
      {!editService && (
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
                      onClick={() => handleEditService(p.id)}
                      className="btn btn-neutral btn-xs text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="btn btn-error btn-xs text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {editService && (
        <div className=" rounded-lg px-4 ">
          <h2 className="text-2xl font-semibold mb-4">Update your service</h2>
          <form
            className="border border-primary bg-white -to-tr from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-600 p-3 rounded-xl shadow-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                type="text"
                placeholder="Type Title"
                id="title"
                {...register("title", { required: true })}
                className="input input-bordered input-secondary w-full"
              />
              {errors?.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                id="description"
                name="description"
                placeholder="Type Description"
                className="w-full border p-2 rounded input input-bordered input-secondary"
              />
              {errors?.description && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <input
                type="text"
                id="category"
                {...register("category")}
                placeholder="Type Category"
                className="input input-bordered input-secondary w-full "
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                id="price"
                {...register("price", { required: true })}
                type="number"
                placeholder="Type Price"
                className="input input-bordered input-secondary w-full "
              />
            </div>

            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-600">
                Images (URL)
              </label>
              <input
                type="text"
                id="images"
                {...register("images", { required: true })}
                placeholder="URL"
                className="input input-bordered input-secondary w-full "
              />
            </div>

            <div className="mb-4">
              <label htmlFor="available" className="block text-gray-600">
                Available
              </label>
              <input
                type="checkbox"
                {...register("available")}
                id="available"
                name="available"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex justify-around px-10">
              <button
                type="submit"
                className="  text-white p-2 rounded btn-secondary "
              >
                Updated Service
              </button>
              <button
                onClick={() => setEditService(!editService)}
                className="  text-white p-2 rounded btn-info bg-red-500 "
              >
                Cencel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
