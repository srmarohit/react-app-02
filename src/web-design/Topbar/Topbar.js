import React from "react";
import style from "./Topbar.module.css"

export default function Topbar() {
  return (
   <div className="container-fluid bg-dark"> 
    <div className="container d-flex justify-content-between align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
            Link
          </a>
        </li>

        <span className="text-white small p-2">|</span>

        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
            Link
          </a>
        </li> 
      </ul>

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
                     <i className="fas fa-car pr-1"></i>
              Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
          <i className="fas fa-map-marker pr-1"></i>
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white small" href="#">
          <i className="fas fa-phone pr-1"></i>
            Link
          </a>
        </li>

        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white small" href="#" id="navbardrop" data-toggle="dropdown">
    
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
        
      </ul>
    </div>
  </div>  
  );
}
