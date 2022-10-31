import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Header, Footer} from "./components"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Header/>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
