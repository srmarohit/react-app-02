import React, { useState } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar/navbar';
import Hero from './Header/hero';
import Topbar from './Topbar/Topbar';
import Menubar from './Menubar/Menubar';
import HeroSlider from './Hero/HeroSlider';
import Searchbar from './Searchbar/Searchbar';
import ContentPrimary from './Content/ContentPrimary';
import ContentSecondary from './Content/ContentSecondary';
import ContentTernary from './Content/ContentTernary';
import Footer from './Footer/Footer';

function WebApp() {
    const [hideSearch, setHideSearch] = useState(true);
    const display = ()=>{
        setHideSearch(!hideSearch)
    }

    return (
        <div>
            <div className="sticky-top">
            <Topbar/>
            {hideSearch ? <Menubar hideMenu={display}/> : <Searchbar hideSearchbar={display}/>}
            </div>
            <HeroSlider/>
            <ContentPrimary/>
            <ContentSecondary/>
            <ContentTernary/>
            <Footer/>
        </div>
    )
}

export default WebApp
