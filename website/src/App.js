import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer} from "./components"
import { Home, Addlist, Contact, List, EditList} from "./pages"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/addlist" element={<Addlist/>}></Route>
      <Route path="/edit/:id" element={<EditList/>}></Route>
      {/* Content */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
