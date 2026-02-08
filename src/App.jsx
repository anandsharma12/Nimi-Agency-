import Home from "./Pages/Home";
import "./App.css";
import "./index.css";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
