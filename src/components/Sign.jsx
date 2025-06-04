
import {Button, TextField} from '@mui/material'

import React from 'react'


const Sign = () => {
  return (
    <div>
        
      <TextField variant="outlined" label="name"></TextField>
      <br/><br/>   
      <TextField variant="outlined" label="DOB"></TextField>
      <br/><br/>
      <TextField variant="outlined" label="phone number"></TextField>
         <br /><br />
        <TextField variant="outlined" label="username"></TextField>
        <br /><br />
      
         <TextField variant="outlined" label="create password"></TextField>
      <br/><br/>
      <TextField variant="outlined" label="re enter password"></TextField>
      <br/><br/>
      <TextField variant="outlined" label="email"></TextField>
      <br/><br/>
      
         
    
    <Button variant='contained'>
        create account
    </Button>
      
      
    </div>
  )
}

export default Sign
