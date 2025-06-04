
import {Button, TextField} from '@mui/material'

import React from 'react'


const Log = () => {
  return (
    <div>
        
         <TextField variant="outlined" label="username or phone number"></TextField>
         <br /><br />
        <TextField variant="outlined" label="password"></TextField>
        <br /><br />
         
    
    <Button variant='contained'>
        submit
    </Button><br/><br/>
      
      <Button variant='outlined'>
        forgot passsword?
    </Button>
    </div>
  )
}

export default Log

