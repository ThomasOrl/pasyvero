import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Produits from "./components/pages/Products";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produits" element={<Produits />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
