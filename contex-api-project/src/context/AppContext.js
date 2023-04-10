import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //   loading data from api call
  console.log(loading);
  async function fetchBlogs(page = 1) {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}?page=${page}`);
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
    fetchBlogs(page);
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
