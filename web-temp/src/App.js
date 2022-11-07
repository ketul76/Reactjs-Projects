import React,{useState} from 'react';
  import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import data from './data';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
const [activePage,setActivePage] = useState("login");
const [userLogin,setUserLogin] = useState(data.login.loginUser);
const [child,setChild] = useState("");
const getData = (data) => {
  console.log(data);
}
return(
  <>
  <Header dataItem={getData} navClickHandle = {setActivePage} headerData={data.header}/>
   <Login loginPage={setUserLogin} loginData={data.login}/>  
   {userLogin.userName === data.login.email && userLogin.pass === data.login.password && <Home homeItems={data.home}/>}
   {activePage === "about" && <About aboutDatas = {data.about}/>}
   {activePage === "service" && <Service servicesData ={data.service}  />}
   {activePage === "contact" && <Contact contactData = {data.contact} />}
   {activePage === "signup" && <Signup signupData = {data.signup}/>}
  <Footer footerData={data.footer}/>
  </>
)
}



export default App;
