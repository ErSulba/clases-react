import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const login = () => setIsLoggedin(true);
  const logout = () => setIsLoggedin(false);
  let button;
  if (isLoggedin) {
    button = <LogoutButton onClick={logout} />
  } else {
    button = <LoginButton onClick={login} />
  }
  return (
    <div>
      <Greeting isloggedin={isLoggedin} />
      {button}
    </div>
  );
}






export default App;
