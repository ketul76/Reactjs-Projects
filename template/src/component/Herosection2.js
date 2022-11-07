import React from "react";

function Herosection2(props){
  let heroSection2Items = props.heroSection2Data;
  return(
    <>
       <section className="about-music container">
        <h3>{heroSection2Items.heroSectionTwoTitle}</h3>
        <p>
         {heroSection2Items.paragraph}
        </p>
        <button className="secondary-btn">{heroSection2Items.ReadMoreButton}</button>
        <div className="mac-img">
          <img src="/images/mac.png" alt="macbook" />
        </div>
      </section>
      <section className="video-section" id="video">
        <div className="container">
          <h3>{heroSection2Items.vidioSectionTitle}</h3>
          <p>
          {heroSection2Items.vidioSectionInfo}
          </p>
        </div>
      </section>
      <div className="container">
        <section className="gift-section" id="gift">
          <div className="gift-card">
            <img src="/images/gift_card.png" alt="gift card" />
          </div>
          <div className="gift-content">
            <h3>{heroSection2Items.giftSectionTitle}</h3>
            <p>
             {heroSection2Items.giftSectionParagraph}
            </p>
            <p>{heroSection2Items.musicGiftCard}</p>
            <hr />
            <div>
              <button className="secondary-btn">{heroSection2Items.redeemButton}</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Herosection2;