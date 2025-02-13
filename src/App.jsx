import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rental from "./pages/Rental/Rental";
import Error404 from "./pages/Error404/Error404";
import rentalsList from "./data/rentalsList.json";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:id" element={<Rental />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
