import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
