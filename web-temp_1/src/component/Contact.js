import React from 'react';
import Header from './Header';
import Footer from './Footer';
import data from '../data';

function Contact(props) {
  const contactItems = props.contactData;
  const activeContact = props.contactPage;
  return (
<>
<Header clickHandler={activeContact}  headerData={data.header}/>
  <div className="container" >
    <h1>{contactItems.title}</h1>
    <form>
      <label for="fname">{contactItems.fname}</label>
      <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" />

      <label for="lname">{contactItems.lname}</label>
      <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" />

      <label for="email">{contactItems.email}</label>
      <input type="email" name="email" id="email" placeholder="Enter Your Email Id" />

      <label for="mnumber">{contactItems.mobile}</label>
      <input type="number" name="mnumber" id="mnumber" placeholder="Enter Your Mobile number" />

      <input type="submit" value="submit" />
    </form>
  </div>
  <Footer footerData={data.footer}/>
</>
  );
}

export default Contact;