import React from 'react';
import Logo from "../images/logo-bookmark.svg";
import { ReactComponent as MobileLogo } from "../images/mobileLogo-bookmark.svg";
import Twitter from '../images/icon-twitter.svg';
import Facebook from '../images/icon-facebook.svg';
import { Link } from 'react-scroll';


const Header = () => {
    const burger = () => {
        const burger = document.querySelector(".burgerIcon__lineContainer")
        burger.classList.toggle("is-active");
        const opener = document.querySelector(".mobileMenu__dropdown")

        if (opener.style.height === "100%") {
            opener.style.height = "0%";
        } else {
            opener.style.height = "100%";
        }
    }

    return (
        <section className="mainPage_header">
            <img className="header_logo" src={Logo} alt="Bookmark_logo"></img>
            <nav className="header_navigation">
                <ul id="header_navigation-listID" className="header_navigation-list">
                    <Link to="mainPage_features" className="navigation_list-element" smooth={true} duration={1500}>FEATURES</Link>
                    <Link to="mainPage_pricing" className="navigation_list-element" smooth={true} duration={1500}>PRICING</Link>
                    <Link to="mainPage_contact" className="navigation_list-element" smooth={true} duration={1500}>CONTACT</Link>
                    <li className="navigation_list-element navigation_list-login">Login</li>
                </ul>
            </nav>
            <div className="burgerIcon">
                <div onClick={burger} className="burgerIcon__lineContainer burgerIcon__action">
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                </div>
            </div>

            <div className="mobileMenu__dropdown">
                <MobileLogo className="header_mobilelogo" />
                <ul className="mobileDropdown__content">
                    {/* <Link to="mainPage_features" className="mobileMenu__link" smooth={true} duration={1500}>FEATURES</Link>
                    <Link to="mainPage_pricing" className="mobileMenu__link" smooth={true} duration={1500}>PRICING</Link>
                    <Link to="mainPage_contact" className="mobileMenu__link" smooth={true} duration={1500}>CONTACT</Link> */}
                    <li className="mobileMenu__link">FEATURES</li>
                    <li className="mobileMenu__link">PRICING</li>
                    <li className="mobileMenu__link">CONTACT</li>
                    <li className="mobileMenu__link">LOGIN</li>
                    <div className="mobileMenu_socialIcons">
                        <img className="mobileMenu_socialIcons-element" src={Facebook} alt='Facebook_logo'></img>
                        <img className="mobileMenu_socialIcons-element" src={Twitter} alt='Twitter_logo'></img>
                    </div>
                </ul>
            </div>
        </section >
    )
}
export default Header;


