import React from 'react';

function Login(props) {
  const login = props.loginData;
  return (
    <div>
      <form >
        <label for="email">{login.email}</label>
        <input type="email" name="email" id='email' />

        <label for="password">{login.password}</label>
        <input type="number" name="password" id='number'/> 
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;