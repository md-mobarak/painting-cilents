/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react-hooks/exhaustive-deps */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [services2, setServices2] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://painting-server-9.vercel.app/api/v1/painting/service?page=${page}&size=${size}&search=${searchTerm}&category=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`
        );
        const data = await response.json();
        setServices(data.data);
        // console.log(data);
        setServices2(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, [page, size, searchTerm, selectedCategory, minPrice, maxPrice]);

  const handlePreviousPage = () => {
    // console.log(page);
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    // console.log(page);
    // Assuming totalPage is provided in the API response
    if (page < services2?.meta?.totalPage) {
      setPage(page + 1);
    }
  };
  const router = useRouter();
  const { pathname } = router;
  const handleNavigate = (id) => {
    // console.log(id);
    router.push(`/ProductDetails/${id}`);
  };
  console.log(services);
  return (
    <div className="flex flex-col md:flex-row px-10">
      {/* Sidebar - Filters */}
      <aside
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        className="md:w-1/4 p-4 bg-gray-200"
      >
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value?.toLowerCase())}
            name="category"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="painting">Painting</option>
            <option value="InteriorPainting">Interior Painting</option>
            <option value="ExteriorPainting">Exterior Painting</option>
            <option value="ResidentialPainting">Residential Painting</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label
            htmlFor="minPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="maxPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Max Price
          </label>
          <input
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
            id="maxPrice"
            name="maxPrice"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search services..."
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Service Cards */}
        <div
          // data-aos="fade-up"
          // data-aos-anchor-placement="top-bottom"
          // data-aos-duration="2000"
          // data-aos-anchor-placement="top-top"
          className={`${
            services?.length &&
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          } `}
        >
          {/* Display services for the current page */}
          {!services?.length ? (
            <div className="flex justify-center my-20 items-center">
              <span className="loading loading-infinity w-16   text-secondary loading-xl"></span>
            </div>
          ) : (
            services?.map((service) => (
              <div
                key={service.id}
                className="bg-white p-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  className="w-full h-40 object-cover object-center mb-4 rounded-md"
                  src={service.images}
                  alt={`Service Image for ${service.images}`}
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  {service?.description?.slice(0, 70)}...
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Price:$ {service.price}
                </p>
                <button
                  onClick={() => handleNavigate(service.id)}
                  className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                  Details
                </button>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center">
          <button
            onClick={handlePreviousPage}
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Previous
          </button>
          <span className="mx-3 font-semibold">Page Number: {page}</span>
          <button
            onClick={handleNextPage}
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Services;
