import React, { useState, useEffect } from "react";
import style  from "./Menubar.module.css";
import logo from "./../img/logo.png";

function Menubar({hideMenu}) {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
      if (window.scrollY >= 150) {
          setScrollNav(true);
      } else {
          setScrollNav(false);
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, []);


  return (
   <div className={scrollNav ? "bg-light ": ""}> 
    <div className="container d-flex justify-content-between align-items-center">
      <nav class="navbar navbar-expand-sm navbar-dark">
        <a class="navbar-brand  d-inline-block text-dark" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", transform: "translateY(-5px)" }}
          />
        </a>

        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class={scrollNav ? "nav-link text-dark small" : "nav-link text-white small"} href="#">
              Active
              <br />
              Honda
            </a>
          </li>
          <li class="nav-item">
            <a class={scrollNav ? "nav-link text-dark small" : "nav-link text-white small"} href="#">
              Link
              <br />
              Honda
            </a>
          </li>
          <li class="nav-item">
            <a class={scrollNav ? "nav-link text-dark small" : "nav-link text-white small"} href="#">
              Link
              <br />
              Honda
            </a>
          </li>
          <li class="nav-item">
            <a class={scrollNav ? "nav-link text-dark small" : "nav-link text-white small"} href="#">
              Disabled
              <br />
              Honda
            </a>
          </li>
        </ul>
      </nav>

      <div className="d-flex justify-content-center align-items-center">
          <a href="/" className="btn btn-lg btn-danger mr-2 small">
            e-Banking
          </a>
          
          {scrollNav
          ?
          <button className={"btn btn-lg  small text-dark  border-dark "+style.searchBtn}
          onClick={hideMenu}
          >
           <i className="fas fa-search mr-2"></i>Search
         </button>
         :
         <button className={"btn btn-lg bg-transparent small text-white border-white "+style.searchBtn}
         onClick={hideMenu}
         >
          <i className="fas fa-search mr-2"></i>Search
        </button>
         }
         
        </div>
    </div>
  </div>  
  );
}

export default Menubar;
