import React from "react";
import Header from './Header';
import Footer from './Footer';
import data from "../data";
function Home(props){
  const homeItems = props.homeDatas;
  const passedActivePage = props.homePage;
  return(
  <>
  <Header clickHandler = {passedActivePage} headerData={data.header} />
  <div class="container">
    <h1>{homeItems.title}</h1>
    <img class="img" src="/img/img.jpg" />
    <p>{homeItems.paragraph}</p>
  </div>
  <Footer footerData={data.footer}/>
  </>
  )
}

export default Home;