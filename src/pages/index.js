/* eslint-disable react-hooks/rules-of-hooks */
import Home from "@/components/Home";
import "react-toastify/dist/ReactToastify.css";
// import "/node_modules/placeholder-loading/src/scss/placeholder-loading";
// minified version is also included

// import 'react-toastify/dist/ReactToastify.min.css';
import ScrollToTop from "react-scroll-to-top";
// ..

export default function index({ data }) {
  // console.log(data.data);
  if (!data?.data?.length) {
    return <div className="text-4xl text-center text-error">loading...</div>;
  } else {
    return (
      <main>
        <Home data={data}></Home>
        <ScrollToTop smooth color="#3F3B75" />
      </main>
    );
  }
}

export async function getServerSideProps() {
  try {
    // Fetch data from an API or any other data source
    const res = await fetch(
      "https://painting-server-9.vercel.app/api/v1/painting/service"
    );
    if (!res?.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res?.json();
    // Return the data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        data: [], // You can provide a default value or appropriate error handling here
      },
    };
  }
}

// import { useEffect, useState } from 'react';
// import Home from "@/components/Home";

// export default function index({ data }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // You can remove the simulated loading with a timeout
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Simulate a 2-second loading delay
//   }, []);

//   return (
//     <main>
//       {loading ? (
//         // Display a loader while data is loading
//         <div className="loader">Loading...</div>
//       ) : (
//         // Display the content when data is loaded
//         <Home data={data} />
//       )}
//     </main>
//   );
// }
