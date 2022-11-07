import React from "react";
import "../t-shirt-style.css"

function TshirtDesign(){
  return(
  <>
    <header>
    <nav>
      <div className="logoname">ToolM5</div>
      <div className="menu">
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Contacts</li>
          <img src="icon-images/fb.png" alt=""/>
          <img src="icon-images/tw.png" alt=""/>
          <img src="icon-images/ig.png" alt=""/>
          <button>Get Started</button>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <div className="section1">
      <h3>Ceate Your</h3>
      <h1>T-Shirt Design</h1>
      <button>Get Started</button>
      <a href="#">view how it works</a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit!</p>
    </div>
    <hr/>
  </main>  
  </>
  )
}
export default TshirtDesign;