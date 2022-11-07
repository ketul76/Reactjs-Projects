import React from 'react';

function Signup({signUpDatas}) {
  return (
    
    <div>
     <form>
      <h1>{signUpDatas.title}</h1> 
      <div className='input-container'>
        <label>{signUpDatas.name}</label><br/>
        <input type="text" name="text" />
      </div>

      <div className='input-container'>
        <label>{signUpDatas.email}</label><br/>
        <input type="email" name="email" />
      </div>

      <div className='input-container'>
        <label>{signUpDatas.password}</label><br/>
        <input type="password" name="password" />
      </div>

      <div className='button-container'>
        <input type="submit" value="Submit" />
      </div>
      <h2>{signUpDatas.rendertext}<a href="signup.html">{signUpDatas.renderLink}</a></h2>
     </form>
    </div>
  );
}

export default Signup;