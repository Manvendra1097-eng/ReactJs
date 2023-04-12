import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
