import React from "react";

function Header(props){
  const headerItems = props.headerData;
  const headerItems1 = props.headerData.menu; 
  return(
    <header>
      <nav className="container">
        <div className="logo">{headerItems.logoTitle}</div>
        <div className="menu_bar">
          <i className="fas fa-music"></i>
        </div>
        <ul> {headerItems1.map((item) => 
          (
          <a href={item.link}>
            <li>{item.navName}</li>
          </a>
          )
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;