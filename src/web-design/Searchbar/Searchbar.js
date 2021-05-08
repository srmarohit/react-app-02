import React from "react";
import logo from "./../img/logo.png";

export default function Searchbar({hideSearchbar}) {
  return (
    <div className="container d-flex justify-content-between bg-white align-items-center">
      <a class="navbar-brand  d-inline-block text-dark" href="#">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", transform: "translateY(-5px)" }}
        />
      </a>

      <div class="form-group d-flex justify-content-center flex-grow-1 align-items-center" style={{transform:'translateY(10px)'}}>
        <i className="fas fa-search font-weight-bold mr-2"></i>
        <input type="text" class=" border-0  form-control" id="search" />
      </div>

      <div class="close ml-3" onClick={hideSearchbar}>
        <i className="fas fa-times font-weight-bold"></i>
      </div>
    </div>
  );
}
