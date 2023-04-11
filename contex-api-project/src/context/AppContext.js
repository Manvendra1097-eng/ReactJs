import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {  useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigat = useNavigate();
  // const location = useLocation();

  //   loading data from api call
  async function fetchBlogs(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;

    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function changePageHandler(page) {
    setPage(page);
    navigat({ search: `?page=${page}` });
  }

  const value = {
    posts,
    loading,
    page,
    totalPages,
    setPosts,
    setLoading,
    setPage,
    setTotalPages,
    fetchBlogs,
    changePageHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
