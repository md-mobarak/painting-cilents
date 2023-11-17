import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadProduct = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const price = Number(data.price);
    const newData = {
     title: data.title,
     images: data.images,
     category: data.category,
     description: data.description,
      price: price,
      available:data.available
  }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/painting/create-painting",
        newData
      );
      console.log("Service uploaded:", response.data);
      if (response.data) {
        toast.success("Successfully done Service Post", {
          position: toast.POSITION.TOP_CENTER,
          transition: swirl,
        });
      }

      // Add any further actions here, like redirecting to a success page
    } catch (error) {
      console.error("Service upload failed:", error);
    }

    reset();
  };
  return (
    <div className=" rounded-lg px-4   custom ">
      <h2 className="text-2xl font-semibold mb-4">Upload Your Service</h2>
      <form
        className="border border-primary bg-white -to-tr from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-600 p-4 rounded-xl shadow-2xl"
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
          {errors?.title && <p className="text-red-500">Title is required</p>}
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

        <button
          type="submit"
          className=" w-full text-white p-2 rounded btn-secondary "
        >
          Upload Service
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
