import React from "react";

function Footer(props){
  let footers = props.footerData.footerItems;
  return(
    <footer>
    <section className="footer-upper">
      <div className="container">
        {footers.map((item)=>(
          <div className={item.className}>
            {console.log(item.className)}
          <h4>{item.title}</h4>
          <ul>
            {item.lists.map((litem) => (
              <li>{litem}</li>
            ))}
          </ul>
        </div>
        ))}

      </div>
    </section>
    <section className="footer-lower">
      <p>{footers.footerInfo}</p>
    </section>
  </footer>
  )
}

export default Footer;