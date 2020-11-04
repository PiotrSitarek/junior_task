import React from 'react';
import heroIllustration from '../images/illustration-hero.svg';

const BookmarkInfo = () => {

    return (
        <section className="mainPage_bookmarkInfo">
            <div className="bookmarkInfo_text">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="bookmarkInfo_text-buttons">
                    <button className="bookmarkInfo_text-button  bookmarkInfo_text-button1">Get it on Chrome</button>
                    <button className="bookmarkInfo_text-button bookmarkInfo_text-button2">Get it on Firefox</button>
                </div>
            </div>
            <div className="bookmarkInfo_imageContainer">
                <img className="bookmarkInfo_image" src={heroIllustration} alt="Hero_illustration"></img>
                <div className="bookmarkInfo_image-background"></div>
            </div>
        </section>

    )
}
export default BookmarkInfo;