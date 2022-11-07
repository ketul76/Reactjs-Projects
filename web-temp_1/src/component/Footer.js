import React from 'react';

function Footer(props) {
  const footerItems = props.footerData;
  return (
    <footer>
      <h2 className="footer-info">{footerItems.footerinfo}</h2>
      <h3>{footerItems.footerDesc}</h3>
    </footer>
  );
}

export default Footer;