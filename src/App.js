import './nav.css';
import React,{lazy} from 'react';
import { useState } from 'react';
import Home from './Components/Home';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import ResponsiveAppBar from './Components/navbar_login_after';
import AppBarp from './Components/navbar_bfr';
const Login =lazy(()=>import("./Components/Login"))
const Register =lazy(()=>import("./Components/Register"))
const Shop = lazy(()=>import("./Components/Shop"))
const Contact=lazy(()=>import("./Components/Contact"))
const About=lazy(()=>import("./Components/About"))

function App() {
  const [currentForm,setCurrentForm] = useState('login');
  const toggleState=(state)=>{
    setCurrentForm(state);
  }
  return (
    <div className="App">
      <AppBarp/>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleState} /> : <Register onFormSwitch={toggleState} />
      } */}
    </div>
  );
}

export default App;
