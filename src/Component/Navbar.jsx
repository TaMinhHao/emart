import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  
  const state = useSelector((state)=> state.handleCart)
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 shadow-sm">
        <div class="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">Techno Blast</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>


            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1" /> Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1" /> Register</NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1" /> Cart ({state.length})</NavLink>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;