import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* Existing pages (Task 1) */
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";

/* Project 2 pages */
import Counter from "./pages/Counter";
import ThemeToggle from "./pages/ThemeToggle";
import Timer from "./pages/Timer";
import PropsDemo from "./pages/PropsDemo";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/portfolio">Portfolio</Link>

        {/* Project 2 Links */}
        <Link to="/counter">Counter</Link>
        <Link to="/theme">Theme</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/props">Props</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        {/* Task 1 Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Project 2 Routes */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/theme" element={<ThemeToggle />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/props" element={<PropsDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
