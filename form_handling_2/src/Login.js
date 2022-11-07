import React, { useState } from 'react';

function Login(){
  const [userData,setUserData] = useState({
    name: "",
    address: "",
    password: "",
  })

  const [gender,setGender] = useState(false);
  const [subject,setSubject] = useState('');
  const [checkbox,setCheckbox] = useState('');
  
  const [nameErr,setNameErr] = useState(false);
  const [passErr,setPassErr] = useState(false);
  const [genderErr,setGenderErr] = useState(false);
  const [subjectErr,setSubErr] = useState(false);
  const [chekErr,setCheckErr] = useState(false);
  
  const userChangeHandle = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value})
  }

  const langChangeHandle = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      setCheckbox([
        ...checkbox,value
      ])
    }
  }  

  const genderHandle = (e) => {
    if(e.target.checked){
      setGender(e.target.value)
    }
  }

  const submitHandle = (e) => {
    e.preventDefault();
    
    {userData.name === "" ? setNameErr(true) : setNameErr(false)}
    
    {userData.password.trim().length < 8 ? setPassErr(true): setPassErr(false)}

    {gender !== "male" && gender !== "female"   ? setGenderErr(true) : setGenderErr(false)}

    {subject !== "ss" && subject !== "phy" && subject !== "sci" ? setSubErr(true) : setSubErr(false) }

    {checkbox === "" ? setCheckErr(true): setCheckErr(false) }
 
  }

  return(
    <div>
      <h3>Form</h3>
      <form onSubmit={submitHandle}>
        <label>Name:</label>
        <input type="text" name="name" value={userData.name} onChange={userChangeHandle} />
        {nameErr?<p style={{color:"red"}}>Name Feild Required</p>:""}
        <br/><br/>

        <label>Gender:</label><br/>
        <input type="radio" value="male" checked={gender === "male" } onChange={genderHandle} />Male
        <br/>
        <input type="radio"  value="female" checked={gender === "female"} onChange={genderHandle} />Female
        {genderErr?<p style={{color:"red"}}>plz select! this Field  Required </p>:""}
        <br/><br/>

        <label>Subject:</label>
        <select value={subject} onChange={(e)=> setSubject(e.target.value)}>
          <option value="#">Select</option>
          <option value="ss">SS</option>
          <option value="sci">SCIENCE</option>
          <option value="phy">PHYSICS</option>
        </select>
        {subjectErr?<p style={{color:"red"}}>Select a Subject</p>:""}
        <br/><br/>

        <label>Password:</label>
        <input type="text" name="password" value={userData.password} onChange={userChangeHandle} />
        {passErr?<p style={{color:"red"}}>Password Must 8 or upto 8</p>:""}
        <br/><br/>

        <label>Select Languages</label>
        <br/>
        <input type="checkbox" name="lang" value="english" onChange={langChangeHandle} />
        <label>English</label>
        <br/>
        <input type="checkbox" name="lang" value="gujarati" onChange={langChangeHandle} />
        <label>Gujarati</label>
        <br/>
        <input type="checkbox" name="lang" value="hindi" onChange={langChangeHandle} />
        <label>Hindi</label>
        {chekErr?<p style={{color:"red"}}>plz Checked</p>:""}
        <br/><br/>
        
        <label>Comments</label><br/>
        <textarea  rows="5" cols="10" name="address" value={userData.address} onChange={userChangeHandle} ></textarea>
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login;