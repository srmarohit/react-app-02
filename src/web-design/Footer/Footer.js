
import React from 'react'
import FooterOne from './Footer-1/FooterOne'
import FooterTwo from './Footer-2/FooterTwo'
import style from './Footer-2/FooterTwo.module.css'


function Footer() {
    return (
        <div className="container-fluid bg-dark pt-4">
            <div className="container row">
                <div className="col-4">
                    <FooterOne/>
                </div>
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col">
                            <FooterTwo/>
                        </div>
                        <div className="col">
                        <FooterTwo/>
                        </div>
                        <div className="col">
                        <FooterTwo/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <FooterTwo/>
                        </div>
                        <div className="col">
                        <FooterTwo/>
                        </div>
                        <div className="col">
                        <FooterTwo/>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="bg-light" style={{padding : "0.1rem 0", margin:"1rem -1rem"}} />

            <div className={style.footer+" container mx-auto "}>
                <ul className="d-flex justify-content-around align-items-center">
                    <li className="text-white">CopyWright@ 2021</li>
                    <li><a href="/">oroi-xrisis</a></li>
                    <li><a href="/">prosopika-dedomena-ston-diadiktuako-topo</a></li>
                    <li><a href="/">Cookie Policy</a></li>
                    <li><a href="/">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
