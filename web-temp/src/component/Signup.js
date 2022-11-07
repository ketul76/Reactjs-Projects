import React from 'react';

function Signup(props) {
  let signup = props.signupData;
  return (
    <div>
      <form>
      <label for="fname">{signup.fname}</label>
      <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" />

      <label for="lname">{signup.lname}</label>
      <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" />

      <label for="email">{signup.email}</label>
      <input type="email" name="email" id="email" placeholder="Enter Your Email Id" />

      <label for="password">{signup.password}</label>
      <input type="number" name="password" id="password" placeholder="Enter A Password" />

      <input type="submit" value="SignUp" />
    </form>
    </div>
  );
}

export default Signup;