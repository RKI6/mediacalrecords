import React, { useState } from 'react';
import { Avatar, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Login = (props) => {
  const paperStyle = { padding: 20, height:'60vh', width: 280, margin: '80px auto' };
  const avatarStyle = { backgroundColor: '0c7384' };
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const handleSubmit=(e)=>{
      setName('');
      setPass('');
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>!</Avatar>
          <h2>Sign In</h2>
          <Typography variant="h6" marginLeft="27px" align="left">Email:</Typography>
          <TextField value={name} type='email' onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="Enter your mail-id" variant="outlined" />
          <Typography variant="h6" marginLeft="27px" align="left">Password:</Typography>
          <TextField value={pass} onChange={(e)=> setPass(e.target.value)} id="outlined-basic" label="Enter your Password" type='password' variant="outlined" />
          <Button onClick={handleSubmit} sx={{ margin: '20px' }} variant="contained">Login</Button>
          <br/>
          {/* <Link onClick={()=> props.onFormSwitch("register")}>Don't have account,sign in</Link> */}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
