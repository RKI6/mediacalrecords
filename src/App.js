import './nav.css';
import React,{lazy} from 'react';
// import Register from './Components/Register';
// import Login from './Components/Login';
import { useState } from 'react';
import Home from './Components/Home';
// import Contact from './Components/Contact';
// // import Shop from './Components/Shop';
// import About from './Components/About';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';

const Login =lazy(()=>import("./Components/Login"))
const Register =lazy(()=>import("./Components/Register"))
const Shop = lazy(()=>import("./Components/Shop"))
const Contact=lazy(()=>import("./Components/Contact"))
const About=lazy(()=>import("./Components/About"))
function App() {
  const [currentForm,setCurrentForm] = useState('login');
  // const toggleState=(state)=>{
  //   setCurrentForm(state);
  // }
  return (
    <div className="App">
      <Router>
      <ul>
        <li><a class="Home" href="/">Home</a></li>
        <li><a href="/Shop">Shop</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Register">Register</a></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
      </Router>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleState} /> : <Register onFormSwitch={toggleState} />
      } */}
    </div>
  );
}

export default App;
