import Header from './header/header';
import BookmarkInfo from './bookmarkInfo/bookmarkInfo';
import Features from './features/features';
import OnClickSlider from './onClickSlider/onClickSlider';
import Download from './download/download';
import Browsers from './browsers/browsers';
import Questions from './questions/questions';
// import QuestionsList from './questionsList/questionsList';
import Contact from './contactForm/contact';
import Footer from './footer/footer';

function App() {
  return (
    <>
      <Header />
      <BookmarkInfo />
      <Features />
      <OnClickSlider />
      <Download />
      <Browsers />
      <Questions />
      {/* <QuestionsList /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
