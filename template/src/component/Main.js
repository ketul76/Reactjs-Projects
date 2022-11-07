import React from "react";
import Herosection1 from "./Herosection1";
import Herosection2 from "./Herosection2";
import data from "../data";

function Main(){
  return(
    <main>
     <Herosection1 herosection1Data={data.main.heroSection1} />
     <Herosection2 heroSection2Data={data.main.heroSection2}/>
    </main>
  )
}

export default Main;