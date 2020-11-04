import Header from './header/header';
import BookmarkInfo from './bookmarkInfo/bookmarkInfo';
import Features from './features/features';
import OnClickSlider from './onClickSlider/onClickSlider';
import Download from './download/download';
import Browsers from './browsers/browsers';
import Questions from './questions/questions';
import QuestionsList from './questionsList/questionsList';
import Contact from './contactForm/contact';
import Footer from './footer/footer';
import { useEffect } from 'react';
import modal_image from './images/tab-2-design.jpg';


function App() {

  useEffect(() => {
    var mainPage_modal = document.getElementById("mainPage_modal-ID");

    setTimeout(function () {
      mainPage_modal.style.display = "block";
    }, 30000);

    var modal_close = document.getElementsByClassName("mainPage_modal-close")[0];

    modal_close.onclick = function () {
      mainPage_modal.style.display = "none";
    }

    const myWindow = window.document;
    myWindow.addEventListener("mousemove", e => {

      if (e.pageY < 20 && e.pageX > 900) {
        mainPage_modal.style.display = "block";
        // górny prawy róg aby nie zakłócać działania strony 
      }
    });
  }, [])

  return (
    <>
      <section id="mainPage_modal-ID" className="mainPage_modal">
        <div className="mainPage_modal-content">
          <div className="mainPage_modal-header">
            <p className="mainPage_modal-close">x</p>
            <h1>A Simple Bookmark Manager</h1>
          </div>
          <div className="mainPage_modal-body">
            <img className="modal_image" src={modal_image} alt="modal_image"></img>
          </div>
        </div>
      </section>

      <Header />
      <BookmarkInfo />
      <Features />
      <OnClickSlider />
      <Download />
      <Browsers />
      <Questions />
      <QuestionsList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
