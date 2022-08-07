import "./App.css";
import Topbar from "./topbar/Topbar.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import About from "./blogs/About";
import Home from "./topbar/Home";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mt-0 px-0">
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
