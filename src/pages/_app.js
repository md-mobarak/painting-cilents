import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired configuration
  }, []);
  return (
    <>
      <nav><Navbar /></nav>
      <Component {...pageProps} />
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
