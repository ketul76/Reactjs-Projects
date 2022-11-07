import { useState } from "react";

function Login({loginDatas}) {
  const [userData,setUserData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value});
  }
  const submitHandle = (e) => {
    e.preventDefault();
  }




  return (
    <div>
     <form onSubmit={submitHandle}>
      <h1>{loginDatas.title}</h1> 
      <div className='input-container'>
        <label>{loginDatas.email}</label><br/>
        <input type="email" name="email" value={userData.email}    onChange={changeHandler}/>
      </div>

      <div className='input-container'>
        <label>{loginDatas.password}</label><br/>
        <input type="password" name="password"  value={userData.password} onChange={changeHandler}/>
      </div>

      <div className='button-container'>
        <input type="submit" value="Submit" />
      </div>
      <h2>{loginDatas.rendertext}<a href="signup.html">{loginDatas.renderLink}</a></h2>
     </form>
    </div>
  );
}

export default Login;