import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
