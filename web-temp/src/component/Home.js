import React from "react";
import Login from "./Login";

function Home(props){
  const homeItems = props.homeDatas;
  return(
  <>
  
  <div class="container">
    <h1>{homeItems.title}</h1>
    <img class="img" src="/img/img.jpg" />
    <p>{homeItems.paragraph}</p>
  </div>
  
  </>
  )
}

export default Home;