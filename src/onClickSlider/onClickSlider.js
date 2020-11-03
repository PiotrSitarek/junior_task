import React, { useEffect } from 'react';
import IllustrationOne from '../images/illustration-features-tab-1.svg';
import IllustrationTwo from '../images/illustration-features-tab-2.svg';
import IllustrationThree from '../images/illustration-features-tab-3.svg';

const OnClickSlider = () => {

    useEffect(() => {
        const bookmarking = document.querySelector("#bookmarking");
        bookmarking.classList.add('visible');
    }, [])


    const toBookmarking = () => {

        const bookmarking = document.querySelector("#bookmarking");
        const searching = document.querySelector("#searching");
        const sharing = document.querySelector("#sharing");

        bookmarking.classList.add('visible');
        searching.classList.remove("visible");
        sharing.classList.remove("visible");

    }

    const toSearching = () => {
        const bookmarking = document.querySelector("#bookmarking");
        const searching = document.querySelector("#searching");
        const sharing = document.querySelector("#sharing");

        searching.classList.add('visible');
        bookmarking.classList.remove("visible");
        sharing.classList.remove("visible");
    }

    const toSharing = () => {
        const bookmarking = document.querySelector("#bookmarking");
        const searching = document.querySelector("#searching");
        const sharing = document.querySelector("#sharing");

        sharing.classList.add('visible');
        bookmarking.classList.remove("visible");
        searching.classList.remove('visible');
    }

    return (
        <section id="mainPage_pricing" className="mainPage_onClickSlider">
            <div className="onClickSlider_buttons-container">
                <button onClick={toBookmarking} className="onClickSlider_button">Simple Bookmarking</button>
                <button onClick={toSearching} className="onClickSlider_button">Speedy Searching</button>
                <button onClick={toSharing} className="onClickSlider_button">Easy Sharing</button>
            </div>
            <div className="onClickSlider_slides-container">

                <div id="bookmarking" className="slides_container first_slide_container">
                    <div className="slide_image-container">
                        <img className="slide_image" src={IllustrationOne} alt="Illustration_one"></img>
                        <div className="slide_image-background"></div>
                    </div>
                    <div className="slide_text-container">
                        <h1 className="slide_slogan">Bookmark in one click</h1>
                        <p className="slide_info">Organize your bookmarks however your like. Our simple drag-and-drop interface gives you complete coontrol over how you manage your favourite sites.</p>
                        <button className="slide_button">More info</button>
                    </div>
                </div>

                <div id="searching" className="slides_container .second_slide_container">
                    <div className="slide_image-container">
                        <img className="slide_image" src={IllustrationTwo} alt="Illustration_two"></img>
                        <div className="slide_image-background"></div>
                    </div>
                    <div className="slide_text-container">
                        <h1 className="slide_slogan">Intelligent search</h1>
                        <p className="slide_info">Our powerful search feature will help you find saved  sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button className="slide_button">More info</button>
                    </div>
                </div>

                <div id="sharing" className="slides_container .third_slide_container">
                    <div className="slide_image-container">
                        <img className="slide_image" src={IllustrationThree} alt="Illustration_three"></img>
                        <div className="slide_image-background"></div>
                    </div>
                    <div className="slide_text-container">
                        <h1 className="slide_slogan">Share your bookmarks</h1>
                        <p className="slide_info">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <button className="slide_button">More info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OnClickSlider;