import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong className="name">WISATA WEB</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ms-2">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/list">
                List
              </Link>
            </li>
            <li className="nav-item ms-2">
                <Link to="/addlist">
                    <button className="btn btn-outline-light" type="button">
                      <strong>Add List</strong>
                    </button>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar