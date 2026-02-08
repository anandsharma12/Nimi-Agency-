import Home from "./Pages/Home";
import "./App.css";
import "./index.css";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
import Courses from "./Pages/Courses/Courses";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
