import React,{useState} from 'react';
import { Avatar, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Register = (props) => {
  const paperStyle = { padding: 20, height:'80vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '0c7384' };
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const handleSubmit=(e)=>{
    setName('');
    setPass('');
    setEmail('');
}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>!</Avatar>
          <h2>Sign Up</h2>
          <Typography variant="h6" marginLeft="27px" align="left">Name:</Typography>
          <TextField  onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="Enter your Name" variant="outlined" />
          <Typography variant="h6" marginLeft="27px" align="left">Email:</Typography>
          <TextField id="outlined-basic" onChange={(e)=> setEmail(e.target.value)}  label="Enter your mail-id" variant="outlined" />
          <Typography variant="h6" marginLeft="27px" align="left">Password:</Typography>
          <TextField id="outlined-basic" onChange={(e)=> setPass(e.target.value)}  label="Enter your Password" type='password' variant="outlined" />
          <br/>
          <TextField sx={{marginTop:'10px'}} id="outlined-basic" label="Confirm your Password" type='password' variant="outlined" />
          <Button onClick={handleSubmit} sx={{ margin: '20px' }} variant="contained">Login</Button>
          <br/>
          {/* <Link onClick={()=> props.onFormSwitch("login")}>Don't have account,sign in</Link> */}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
