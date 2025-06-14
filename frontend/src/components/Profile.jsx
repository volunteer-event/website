import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <Button variant='contained'>
            <Link to={"/myevents"}>my events</Link>
      </Button> <br/><br/>
      <Button variant='contained'>
            <Link to={"/regevents"}>volunteered events</Link>
      </Button>
    </div>
  )
}

export default Profile