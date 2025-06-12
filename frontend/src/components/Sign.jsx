import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Box, Button, IconButton, InputAdornment, TextField} from '@mui/material'
import React, { useState } from 'react'

const Sign = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword((prev) => !prev);
  };
  return (
    <div>
        
      <Box className="register-form">
      <TextField variant="outlined" label="Name" className="form-field" />

      <TextField variant="outlined" label="Phone Number" className="form-field" />

      <TextField variant="outlined" label="Email" className="form-field" />

      <TextField
        variant="outlined"
        label="Create Password"
        className="form-field"
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

      <Button variant="contained">
        Create Account
      </Button>
    </Box>
      
      
    </div>
  )
}

export default Sign
