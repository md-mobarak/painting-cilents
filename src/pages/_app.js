import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
