import React from "react";
import "../lastChanceStyle.css"

function LastChance(){
  return(
    <>
    <header>
    <nav>
      <div className="logo">
        <img src="LastChangeImages/logo.png"/>
        <h2>Last Chance</h2>
      </div>
      <div className="menu">
        <ul>
          <li className="home-list">Home</li>
          <li className="about-list">About</li>
          <li className="contact-list">Contact</li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <div className="hero-section1">
      <h6>ketulpatel</h6>
      <h1>protect</h1>
      <h1>our <span>wildlife</span></h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
    <div className="section2">
      <h4 className="start">GET STARTED</h4>
      <div className="one">
        <h1>40K</h1>
        <h3>Endangered</h3>
        <h3>species</h3>
      </div>
      <div className="two">
        <h1>800</h1>
        <h3>Volunteers</h3>
      </div>
      <div className="three">
        <h1>140</h1>
        <h3>Conservation</h3>
        <h3>Programs</h3>
      </div>
      <div className="four">
        <h1>1</h1>
        <h3>Earth for us to</h3>
        <h3>Protect</h3>
      </div>
    </div>
    <div className="section3">
      <div className="sec-1">
        <h1>About Last</h1>
        <h1 className="text">Chance</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem, ipsum dolor.</p>
        <button>Read More</button>
      </div>
      <div className="sec-2">
     
      </div>
      <div className="sec-3">
        <h1>Upcoming</h1>
        <h1 className="text">Projects to fund</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>Read More</button>
      </div>
    </div>
  </main>
    </>
  )
}
export default LastChance;