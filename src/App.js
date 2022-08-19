import './App.css';
import { React} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import Users from './components/Users';


function App() {

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/products" element={<div>
          <Products />
        </div>} />
        <Route path="/users" element={<div>
          <Users />
        </div>} />
        <Route path="/" element={<div>
          <Home />
        </div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;