import React from 'react';
import Header from './Header';
import Footer from './Footer';
import data from '../data';

function Service(props) {
  const serviceItems = props.servicesData;
  const serviceActive = props.servicePage;
  return (
<div>
<Header clickHandler={serviceActive} headerData={data.header}/>
  <div className="container">
    <h1>{serviceItems.title}</h1>
    <ul>
      {serviceItems.servicesList.map((item) => (
        <li>{item}</li>
      ))}  
    </ul>
  </div>
  <Footer footerData={data.footer}/>
</div>
  );
}

export default Service;