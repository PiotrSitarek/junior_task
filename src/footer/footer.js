import React, { useEffect } from 'react';
import Logo from "../images/mobileLogo-bookmark.svg";
import { Link } from 'react-scroll';
import { ReactComponent as TwiterrLogo } from "../images/icon-twitter.svg";
import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";


const Footer = () => {

    useEffect(() => {

        const footer_TwitterIcon = document.querySelector(".footer_TwitterIcon");

        footer_TwitterIcon.addEventListener("mouseover", function (event) {
            footer_TwitterIcon.firstChild.setAttribute("fill", "#fa5757")
        });

        footer_TwitterIcon.addEventListener("mouseout", function (event) {
            footer_TwitterIcon.firstChild.setAttribute("fill", "#ffffff")
        });

        const footer_FacebookIcon = document.querySelector(".footer_FacebookIcon");

        footer_FacebookIcon.addEventListener("mouseover", function (event) {
            footer_FacebookIcon.firstChild.setAttribute("fill", "#fa5757")
        });

        footer_FacebookIcon.addEventListener("mouseout", function (event) {
            footer_FacebookIcon.firstChild.setAttribute("fill", "#ffffff")
        });
    }, [])





    return (
        <section className="mainPage_footer">
            <div className="footer_container">
                <img className="footer_logo" src={Logo} alt="Bookmark_logo"></img>
                <Link to="mainPage_features" className="footer_nav" smooth={true} duration={1500}>FEATURES</Link>
                <Link to="mainPage_pricing" className="footer_nav" smooth={true} duration={1500}>PRICING</Link>
                <Link to="mainPage_contact" className="footer_nav" smooth={true} duration={1500}>CONTACT</Link>
            </div>
            <div className="footer_socialIcons-container">
                <TwiterrLogo className="footer_TwitterIcon" />
                <FacebookLogo className="footer_FacebookIcon" />
            </div>
        </section>
    )
}
export default Footer;