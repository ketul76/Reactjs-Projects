import React from "react";
import "../it-company-style.css"

function ItCompany() {
  return (
    <>
      <header>
        <div className="logo">
          <p>It Company</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="home" id="home">
          <img src="it_images/home_image.jpg" />
          <div className="text">
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              quas molestiae voluptas nam ipsam incidunt, illum quidem aperiam
              aliquid. Similique distinctio sunt ipsam eaque. Cum ducimus,
              repudiandae, assumenda tenetur minus praesentium voluptas
              excepturi ipsa nam iusto doloremque cupiditate harum! Natus
              laudantium magnam aliquam et odit suscipit esse ipsam expedita
              facere cumque. Dolorem suscipit voluptas amet ipsam ducimus quod
              cum. Quos iusto corrupti numquam, tenetur magnam dicta ducimus
              animi cum, voluptates accusantium enim labore fuga placeat?
            </p>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-text">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quam, architecto est atque aliquid obcaecati, dolores
              ad maiores nihil quia debitis nulla alias nobis consequuntur
              maxime sit. Sit illo molestias officia consequuntur facere
              obcaecati nam, necessitatibus vitae est sint sapiente eum, alias
              placeat? Officia, optio qui laboriosam accusamus fugit deleniti
              magnam voluptatem quidem modi reprehenderit aliquam vero nisi fuga
              suscipit nostrum amet dicta quae eum mollitia? Eius velit in sequi
              saepe, doloremque suscipit magni nihil?{" "}
            </p>
          </div>
          <img src="it_images/about.jpeg" />
        </section>
        <section className="services" id="service">
          <h1>Our Services</h1>
          <div className="service-list">
            <div className="list1">
              <img src="images/services/digital.png" alt="" />
              <h2>Digital Marketing</h2>
              <img src="images/services/web-design.png" alt="" />
              <h2>Web Design</h2>
              <img src="it_images/services/web-devlopment.jpg" alt="" />
              <h2>Web-Devlopment</h2>
            </div>
            <div className="list2">
              <img src="it_images/services/seo.png" alt="" />
              <h2>SEO</h2>
              <img src="it_images/services/graphics.png" alt="" />
              <h2>Graphics Design</h2>
              <img src="it_images/services/mobile.png" alt="" />
              <h2>Mobile App Devlopment</h2>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <img src="it_images/contactus.jpg" alt="" />
          <div className="form">
            <h1>Contact Us</h1>
            <form action="">
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />

              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />

              <label>Mobile</label>
              <input type="number" placeholder="Enter Your Mobile number" />
              <input type="button" value="Submit" />
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <h1> &copy; 2022 , It Company,All rights Reserved.</h1>
      </footer>
    </>
  );
}
export default ItCompany;