

import React from 'react'
import logo from "../../img/logo.png";
import apple from "../../img/apple-store.png";
import play from "../../img/play-store.png";
import huawei from "../../img/huawei-store.svg";



function FooterOne() {
    return (
        <div className="text-center">
         <a class="d-block mb-3" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", transform: "translateY(-5px)" }}
          />
        </a>

        <button className="btn border-white text-white mb-3" style={{}}>
            <i className="far fa-map mr-1 text-white"></i>
            Greece
        </button>

        <div className="mr-n2 mb-3">
            <i className="fab fa-youtube text-white mr-3"></i>
            <i className="fab fa-twitter text-white mr-3"></i>
            <i className="fab fa-linkedin text-white mr-3"></i>
        </div>

        <h5 className="text-white mb-3">Eurobank Mobile App</h5>

        <a class="d-block mb-3" href="#">
          <img
            src={apple}
            alt="Logo"
            style={{ width: "100px", transform: "translateY(-5px)" }}
          />
        </a>

        <a class="d-block mb-3" href="#">
          <img
            src={play}
            alt="Logo"
            style={{ width: "100px", transform: "translateY(-5px)" }}
          />
        </a>

        <a class="d-block mb-3" href="#">
          <img
            src={huawei}
            alt="Logo"
            style={{ width: "100px", transform: "translateY(-5px)" }}
          />
        </a>

        <h5 className="text-white mb-5">EuroPhone Banking <br/> 210 9555000</h5>

        <div className="pt-5">
        <a href="#" className="btn btn-light mr-2 border ">A</a>
        <a href="#" className="btn btn-light mr-4 border ">A+</a>
        <a href="#" className="btn btn-secondary mr-2 border ">C</a>
        <a href="#" className="btn btn-light mr-2 border ">C+</a>
        <a href="#" className="btn btn-info mr-2 border ">C</a>
        </div>

        </div>
    )
}

export default FooterOne
