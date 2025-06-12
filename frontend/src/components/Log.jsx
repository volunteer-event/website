import React, { useState } from 'react';
import { Button, TextField, IconButton, InputAdornment, Box, FormControlLabel, Checkbox, Link, Typography} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Log = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box className="log-form">
      <TextField
        variant="outlined"
        label="Email id"
        className="form-field"
      />

      <TextField
        variant="outlined"
        label="Password"
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

      <Button variant="contained">
        Log In
      </Button>
      
      <Typography
        variant='h6'>
        Do not have an account?
        <Link href="signup" underline="always">
            Register
        </Link> 
      </Typography>
    </Box>
  );
};

export default Log;
