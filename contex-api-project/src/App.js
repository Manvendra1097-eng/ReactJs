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
    <div className="bg-slate-100 h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
