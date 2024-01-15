import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
import Header from "./components/header/header";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Home heading="Welcome to my Blog" name="Yash" isHome={true} />
          }
        />
        <Route
          path="/about"
          element={<About heading="About Us" isHome={false} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
