import React, { useContext } from "react";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { loading } = useContext(AppContext);
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative">
      <Navbar />
      <Blog />
      {loading ? <div></div> : <Footer />}
    </div>
  );
};

export default Home;
