import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
import Nav from "./components/nav";
// import Header from "./components/header";

function App() {
  return (
    <div>
      <Nav />
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
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
