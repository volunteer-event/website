import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Box, Button, IconButton, InputAdornment, MenuItem, Modal, TextField} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sign = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword((prev) => !prev);
  };

const gend = [
                {value : 'Female',label : 'Female',},
                {value : 'Male',label : 'Male',},
                {value : 'Transgender',label : 'Transgender',},
        ];

  
  var [input,setInput]=useState({
    Name:"",
    PhoneNumber:"",
    Email:"",
    Password:"",
    ConfirmedPassword:"",
    Address:"",
    Gender:""
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
      navigate('/login');
    })
    .catch((err) => {
      console.log(err);
    });
  }

 


  

  return (
    <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/img.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
    >
        <Box className='register-form'
            sx={{
              width: '100%',
              maxWidth: 400,
              ml:'auto',
              mr:8,
              my:8,
              px: 4,
              py: 5,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              boxShadow: 5,
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            
          }}>
        <TextField variant="outlined" label="Name" className="form-field" onChange={inputHandler} name='Name' value={input.Name}/>

        <TextField variant="outlined" label="Phone Number" className="form-field" onChange={inputHandler} name='PhoneNumber' value={input.PhoneNumber}/>

        <TextField variant="outlined" label="Email" className="form-field" onChange={inputHandler} name='Email' value={input.Email}/>

        <TextField
          
          label="Address"
          onChange={inputHandler}
          name='Address'
          value={input.Address}
  
          multiline variant="outlined"/>

        <TextField
                select
                label="Gender"
                onChange={inputHandler}
                name='Gender'
                value={input.Gender}
                
                variant="outlined">
                {gend.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                ))}
            </TextField>

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
