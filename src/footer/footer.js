import React from 'react';
import Logo from "../images/mobileLogo-bookmark.svg";
import { Link } from 'react-scroll';
import Twitter from '../images/icon-twitter.svg';
import Facebook from '../images/icon-facebook.svg';

const Footer = () => {


    return (
        <section className="mainPage_footer">
            <div className="footer_container">
                <img className="footer_logo" src={Logo} alt="Bookmark_logo"></img>
                <Link to="mainPage_features" className="footer_nav" smooth={true} duration={1500}>FEATURES</Link>
                <Link to="mainPage_pricing" className="footer_nav" smooth={true} duration={1500}>PRICING</Link>
                <Link to="mainPage_contact" className="footer_nav" smooth={true} duration={1500}>CONTACT</Link>
            </div>
            <div className="footer_socialIcons-container">
                <img className="footer_socialIcons" src={Facebook} alt='Facebook_logo'></img>
                <img className="footer_socialIcons" src={Twitter} alt='Twitter_logo'></img>
            </div>

        </section>
    )
}
export default Footer;