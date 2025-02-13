import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Rental from "../../pages/Rental/Rental";
import Error404 from "../../pages/Error404/Error404";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rental/:id" element={<Rental />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
