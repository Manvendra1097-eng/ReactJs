import { useContext, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage"
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage"

import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

function App() {
  const { fetchBlogs } = useContext(AppContext);

  // search param hook
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    if (location.pathname.includes("tags")) {
      // have to show tag page
      // getting last element after /
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogs(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogs(Number(page), null, category);
    } else {
      fetchBlogs(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogPage />}></Route>
      <Route path="/tags/:tag" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
    </Routes>
  );
}


export default App;
