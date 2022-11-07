import React from "react";


function Herosection1(props){
  let heroSectionItems = props.herosection1Data;
  return(
  <>
   <section className="hero-section" id="hero">
        <div className="container">
          <h1>{heroSectionItems.heroSectionOneTitle}</h1>
          <h3>{heroSectionItems.smallInfo}</h3>
          <p>
           {heroSectionItems.paragraph}
          </p>
        </div>
      </section>
      <section className="music-section" id="music">
        <div className="container">
          <h2>
            <span><i className="fa fa-music"></i></span>
            {heroSectionItems.musicSectionTitle}
          </h2>
          <h4>
           {heroSectionItems.musicSectionInfo}
          </h4>
          <button className="primary-btn">{heroSectionItems.musicSectionButton}</button>

          <p>
              {heroSectionItems.musicSectionDescribe}
          </p>
          <div className="ipad-iphone-img">
            <img src="/images/ipad-iphone.png" alt="iphone ipad" />
          </div>
        </div>
      </section>
  </>
  )
}

export default Herosection1;