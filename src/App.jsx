import Home from "./Pages/Home";
import "./App.css";
import "./index.css";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
import Courses from "./Pages/Courses/Courses";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/products/:id" element={<CourseDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
