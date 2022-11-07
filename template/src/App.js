import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import data from './data';

function App() {
  return(
    <div>
      <Header headerData={data.header} />
      <Main />
      <Footer footerData={data.footer}/>
    </div>
  )
}

export default App;
