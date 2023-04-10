import { useContext, useEffect } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogs } = useContext(AppContext);

  useEffect(() => fetchBlogs(), []);
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center overflow-x-hidden relative">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
