import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer} from "./components"
import { Home, Post, Addpost, Contact} from "./pages"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
      <Route path="/addpost" element={<Addpost/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
