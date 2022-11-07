import React from 'react';


function Header({navClickHandle,headerData,dataItem}) {
  const navUpdate = navClickHandle;
  const menuItems = headerData;
  return (
    <header>
    <div className="nav">
      <a href="index.html" className="logoname">{menuItems.title}</a>

      <ul>
        {menuItems.menu.map((item) => (
        <li><a onClick={() => { 
          navUpdate(item.link) 
            dataItem(item.link)}  }>{item.navName}</a></li>
        ))}
      </ul>
    </div>
  </header>
  );
}

export default Header;