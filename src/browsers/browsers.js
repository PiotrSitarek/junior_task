import React from 'react';
import Chrome from '../images/logo-chrome.svg';
import Firefox from '../images/logo-firefox.svg';
import Opera from '../images/logo-opera.svg';
import dots from '../images/bg-dots.svg';


const Browsers = () => {


    return (
        <section className="mainPage_browsers">
            <div className="browser_container">
                <img className="browser_container-icon" src={Chrome} alt="Chrome_icon"></img>
                <p className="browser_container-text1">Add to Chrome</p>
                <p className="browser_container-text2" >Minimum version 62</p>
                <img className="browser_container-dots" src={dots} alt="Dots_border"></img>
                <button className="browser_container-button">Add & install extension</button>
            </div>
            <div className="browser_container">
                <img className="browser_container-icon" src={Firefox} alt="Chrome_icon"></img>
                <p className="browser_container-text1">Add to Firefox</p>
                <p className="browser_container-text2" >Minimum version 55</p>
                <img className="browser_container-dots" src={dots} alt="Dots_border"></img>
                <button className="browser_container-button">Add & install extension</button>
            </div>
            <div className="browser_container">
                <img className="browser_container-icon" src={Opera} alt="Chrome_icon"></img>
                <p className="browser_container-text1">Add to Opera</p>
                <p className="browser_container-text2" >Minimum version 46</p>
                <img className="browser_container-dots" src={dots} alt="Dots_border"></img>
                <button className="browser_container-button">Add & install extension</button>
            </div>

        </section>
    )
}
export default Browsers;