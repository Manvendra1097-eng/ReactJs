import React, { useState, useLocation, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigation();
  const location = useLocation();
  const { loading, setloading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1).replaceAll("-", " ");

  async function fetchRelatedBlogs() {
    setloading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url)
      const data = await res.json();
      setRelatedBlogs(data.relatedBlogs)
    } catch (error) {
      
    }
  }

  useEffect(() => {}, []);

  return <div>BlogPage</div>;
};

export default BlogPage;
