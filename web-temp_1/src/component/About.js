import React from "react";
import Header from './Header';
import Footer from './Footer';
import data from "../data";

function About(props){
  const aboutItems = props.aboutDatas;
  const activeAbout = props.aboutPage;
  return(
<>
<Header clickHandler = {activeAbout}  headerData={data.header}/>
    <div class="container">
      <h1>{aboutItems.title}</h1>
      <p>
        <img class="img_2" src="/img/img_1.jpg" />
        {aboutItems.paragraph}
      </p>
    </div>
    <Footer footerData={data.footer}/>
</>
  )
}

export default About;