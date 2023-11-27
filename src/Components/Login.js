import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

const store = createStore(cartReducer);

const CartPage = () => {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCart = (item) =>…
[2:19 PM, 11/27/2023] Karthikeyan Skcet B: npm i redux react-redux
[3:04 PM, 11/27/2023] Karthikeyan Skcet B: // AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
[3:04 PM, 11/27/2023] Karthikeyan Skcet B: // Login.js
import React, { useState,useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../Home/home';
import { useAuth } from '../../AuthContext';
import './login.css';

const Login = () => {
  const url = 'http://localhost:3002/employee';
  const [formData, setFormData] = useState({
    usrname: '',
    pass: '',
  });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();  // Use the useAuth hook

  useEffect(() => {
    axios.get(url).then((response) => {
      setItems(response.data);
    });
  }, []);

  const HandleLogin = () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (formData.usrname === item.username && formData.pass === item.password) {
        setError(false);
        setExist(true);
        login(true);  // Call the login method from the useAuth hook
        navigate('/home');
        return;
      } else {
        setError(true);
        setExist(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='loginbody'>
      <Container maxWidth="sm">
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          {exist ? (
            null
          ) : (
            <Paper elevation={3} style={{ padding: 4, height: '60vh', width: '40vh', margin: '20px auto' }}>
              <Grid align="center">
                <Avatar style={{ backgroundColor: '#0c7384', width: { xs: '50px', sm: '100px' }, height: { xs: '50px', sm: '100px' } }}>!</Avatar>
                <Typography variant="h4" style={{ marginTop: '20px' }}>
                  Sign In
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Enter your details to login to your account
                </Typography>
                <br />
                <Typography variant="h5" style={{ textAlign: 'left', marginLeft: '30px' }}>
                  Username
                </Typography>
                <TextField
                  id="usrname"
                  name="usrname"
                  label="Enter your Username"
                  variant="outlined"
                  style={{ width: '250px', marginTop: 2 }}
                  onChange={handleChange}
                  value={formData.usrname}
                  required
                />
                <br />
                <Typography variant="h5" style={{ textAlign: 'left', marginLeft: '30px' }}>
                  Password
                </Typography>
                <TextField
                  id="pass"
                  name="pass"
                  label="Enter your Password"
                  type="password"
                  variant="outlined"
                  style={{ width: '250px', marginTop: 2 }}
                  onChange={handleChange}
                  value={formData.pass}
                  required
                />
                <br />
                {error ? <Typography color={'red'} variant='6'>*Invalid Username or Password</Typography> : null}
                <br />
                <Button type="submit" variant="contained" onClick={HandleLogin}>
                  Login
                </Button>
              </Grid>
            </Paper>
          )}
        </Grid>
      </Container>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Login;
