import React from 'react';

function Header(props) {
  const menuItems = props.headerData;
  const navUpdate = props.clickHandler;
  return (
    <header>
    <div className="nav">
      <a href="index.html" className="logoname">{menuItems.title}</a>
      <ul>
        {
          menuItems.menu.map((item) => (
            <li>{<a onClick={() => navUpdate(item.link)}>{item.navName}</a>}</li>  
          ))
        }
      </ul>
    </div>
  </header>
  );
}

export default Header;