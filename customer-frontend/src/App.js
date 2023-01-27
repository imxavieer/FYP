import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Reserve from "./pages/reserve";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reserve" element={<Reserve />} />
      </Routes>
    </Router>
  );
}

export default App;
