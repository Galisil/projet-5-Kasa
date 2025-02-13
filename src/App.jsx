import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";
import rentalsList from "./data/rentalsList.json";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
