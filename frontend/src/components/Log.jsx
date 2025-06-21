import React, { useState } from 'react';
import { Button, TextField, IconButton, InputAdornment, Box, FormControlLabel, Checkbox, Link, Typography} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Log = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

     if (!email || !password) {
      setError('Please fill both fields');
      return;
    }

    axios.post('http://localhost:3000/login', { Email: email, Password: password })
      .then(res => {
         console.log('Login success:', res.data);

    localStorage.setItem('user', JSON.stringify(res.data));
    navigate('/profile');
  })
  .catch(err => {
    console.error('Login error:', err.response?.data || err.message);
    setError(err.response?.data || 'Login failed');
  });

  };


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
        }}>
    <Box component="form"
    className="log-form"
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
              color: '#000',
              border: '1px solid rgba(255, 255, 255, 0.3)',      
          }}
    onSubmit={handleSubmit}
    noValidate>
      <TextField
        variant="outlined"
        label="Email id"
        className="form-field"
        onChange= {(e) => {setEmail(e.target.value)}}
        name='Email' 
        value={email}
      />

      <TextField
        variant="outlined"
        label="Password"
        onChange= {(e) => {setPassword(e.target.value)}}
        name='Password'
        value={password}
        type={showPassword ? 'text' : 'password'}
        className="form-field"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Remember me"
      />

      <Button variant="contained" type ="submit">
        Log In
      </Button>
      
      <Typography
        variant='h6'>
          Do not have an account?
          <Link href="signup" underline="always">Register</Link> 
      </Typography>
    </Box>
    </div>
  );
};

export default Log;
