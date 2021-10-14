import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Login from './components/login/Login'
import Galary from './components/galary/Galary'
function App() {
  const [loginshow,logintoggle]=useState(false);
  return (
    <div className="App">
      <Navbar logintoggle={logintoggle}/>
      <Carousel/>
      <h1>Welcome to React</h1>
      {loginshow && <Login/>}
      <Galary/>
    </div>
  );
}

export default App;
