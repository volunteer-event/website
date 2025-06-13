import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Box, Button, IconButton, InputAdornment, TextField} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Sign = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword((prev) => !prev);
  };

  
  var [input,setInput]=useState({
    Name:"",
    PhoneNumber:"",
    Email:"",
    Password:"",
    ConfirmedPassword:""
  });

  console.log("state:",location.state);
  const inputHandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
    console.log(input);
  };
  
  
  const submitHandler = () => {
    console.log("button clicked");
    if (input.Password !== input.ConfirmedPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!input.Name || !input.PhoneNumber || !input.Email || !input.Password || !input.ConfirmedPassword) {
      alert("Please fill all the fields");
      return;
    }

    axios
    .post("http://localhost:3000",input)
    .then((res) => {
      console.log("data added");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  

  return (
    <div>
        
      <Box className="register-form">
      <TextField variant="outlined" label="Name" className="form-field" onChange={inputHandler} name='Name' value={input.Name}/>

      <TextField variant="outlined" label="Phone Number" className="form-field" onChange={inputHandler} name='PhoneNumber' value={input.PhoneNumber}/>

      <TextField variant="outlined" label="Email" className="form-field" onChange={inputHandler} name='Email' value={input.Email}/>

      <TextField
        variant="outlined"
        label="Create Password"
        className="form-field"
        onChange={inputHandler}
        name='Password'
        value={input.Password}
        type={showPassword ? 'text' : 'password'}
        InputProps = {{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        variant="outlined"
        label="Re Enter Password"
        className="form-field"
        onChange={inputHandler}
        name='ConfirmedPassword'
        value={input.ConfirmedPassword}
        type={showRePassword ? 'text' : 'password'}
        InputProps = {{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleRePasswordVisibility} edge="end">
                {showRePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      
      <Button variant="contained"
              onClick={submitHandler}>
        Create Account
      </Button>
    </Box>
      
      
    </div>
  )
}

export default Sign
