
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import Student from "./components/Student";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutCollege from "./pages/AboutCollege";
import AboutDept from "./pages/AboutDept";
import Buttton from "./pages/Buttton";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    {/*Navigation Bar*/}
    <nav>
      <Link to ='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
      <Link to='/button'>Button</Link>

    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/about' element={<About />}>
      <Route path='college' element={<AboutCollege/>}/>
      <Route path='department' element={<AboutDept/>}/>
      </Route>[l]

      <Route path='/contact' element={<Contact />}/>
      <Route path='/button' element={<Buttton/>}/>

     
    </Routes>
    </BrowserRouter>
  );
}

export default App;