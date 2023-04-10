import React, { useNavigation, useLocation } from "react";

const CategoryPage = () => {
  const navigate = useNavigation();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative">
      <Navbar />
      <button onClick={() => navigate(-1)}>back</button>
      <h2>
        Blogs on<span>{category}</span>
      </h2>
      <Blog />
      {loading ? <div></div> : <Footer />}
    </div>
  );
};

export default CategoryPage;
