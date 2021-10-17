import './App.css';
// import {useEffect} from 'react';
import {useState} from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Carousel from './components/Carousel'
import Login from './components/login/Login'
import Galary from './components/galary/Galary'
import Profile from './components/profile/Profile'
function App() {
  const [loginshow,logintoggle]=useState(false);
  return (<Profile/>);
  return (
    <div className="App">
      <Navbar logintoggle={logintoggle}/>
      <Carousel/>
      <div className="brandname">
        Welcome to Ready2Hire
      </div>
      {loginshow && <Login/>}
      <Galary/>
      <Footer/>
    </div>
  );
}

export default App;
