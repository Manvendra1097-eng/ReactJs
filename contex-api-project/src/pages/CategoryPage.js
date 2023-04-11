import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useContext(AppContext);
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative mt-8">
      <Navbar />
      <div className="flex justify-start mt-4 w-11/12 mx-auto ">
        <div className="w-1/2 mr-auto">
          <button onClick={() => navigate(-1)}>back</button>
        </div>
        <h2 className=" w-1/2 ml-auto">
          Blogs on<span> {category}</span>
        </h2>
      </div>
      <Blog />
      {loading ? <div></div> : <Footer />}
    </div>
  );
};

export default CategoryPage;
