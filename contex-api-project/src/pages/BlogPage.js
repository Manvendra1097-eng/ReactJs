import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useNavigate, useLocation } from "react-router-dom";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { setloading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1).replaceAll("-", " ");
  const blogUrl = "https://codehelp-apis.vercel.app/api/get-blog";

  async function fetchRelatedBlogs() {
    setloading(true);
    let url = `${blogUrl}?blogId=${blogId}`;
    console.log("URL: ", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRelatedBlogs(data.relatedBlogs);
      setBlog(data.blog);
    } catch (error) {}
    setloading(false);
  }

  useEffect(
    () => {
      console.log("Inside");
      if (blogId) {
        fetchRelatedBlogs();
      }
    },
    [location.pathname]
  );

  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative mt-8">
      <Navbar />
      <div className=" mt-4 w-11/12 ">
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <Card post={blog} />
      {relatedBlogs?.map((relatedBlog) => {
        return <Card key={relatedBlog.id} post={relatedBlog} />;
      })}
    </div>
  );
};

export default BlogPage;
