import React from 'react';

function Service(props) {
  const serviceItems = props.servicesData;
  return (
<div>
  <div className="container">
    <h1>{serviceItems.title}</h1>
    <ul>
      {serviceItems.servicesList.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
</div>
  );
}

export default Service;