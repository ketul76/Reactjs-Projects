import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import data from './data';

function App() {
  return(
    <>
      <Login  loginDatas={data.login}/>
      <Signup signUpDatas={data.signup}/>
    </>
  )
}

  

export default App;
