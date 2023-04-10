import React, { useNavigation, useLocation } from "react";

const TagPage = () => {
  const { loading } = useContext(AppContext);
  const navigate = useNavigation();
  const location = useLocation();

  // tag
  const tag = location.pathname.slit("/").at(-1).replaceAll("-", " ");

  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative">
      <Navbar />
      <button onClick={() => navigate(-1)}>back</button>
      <h2>
        Blogs Tagged<span>#{tag}</span>
      </h2>
      <Blog />
      {loading ? <div></div> : <Footer />}
    </div>
  );
};

export default TagPage;
