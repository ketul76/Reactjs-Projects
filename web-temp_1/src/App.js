import React,{useState} from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import data from './data';


function App() {
const [activePage,setActivePage] = useState("about");
return(
  <>
   {activePage === "home" && <Home homePage = {setActivePage} homeDatas = {data.home} />}
   {activePage === "about" && <About aboutPage= {setActivePage} aboutDatas = {data.about}/>}
   {activePage === "service" && <Service servicePage ={setActivePage} servicesData ={data.service}  />}
   {activePage === "contact" && <Contact contactPage={setActivePage} contactData = {data.contact} />}
  </>
)
}



export default App;
