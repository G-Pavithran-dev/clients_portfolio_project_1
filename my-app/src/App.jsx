import { Routes, Route } from "react-router-dom";
import Navbar from "./globalComponent/Navbar";
import Footer from "./globalComponent/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import HeroSection from "./globalComponent/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hero" element={<HeroSection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
