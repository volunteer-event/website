import { Link, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Typography
          variant='h2' 
          sx={{ flexGrow: 1,textAlign:'center' }} 
          style={{
            fontFamily:'aerial',
            fontWeight:600,
          }}>
          Event-Volunteer Management
      </Typography>
      <br/><br/>
      <Typography
          variant='h3' 
          sx={{ flexGrow: 1,textAlign:'left' }} 
          style={{
             fontFamily: 'aerial',
             fontWeight: 400,
             color: '#333',
          }}>
          Empowering Events. Enabling Impact.
       </Typography>
       <br/>
       
      <Typography
          variant='h5' 
          sx={{ flexGrow: 1,textAlign:'left' }} 
          style={{fontFamily:"aerial"}}>
          Volunteer Event Manager is a streamlined platform designed for 
          seamless coordination between event organizers and volunteers. 
          Organizers can efficiently register and manage events, while 
          volunteers can explore and sign up for active opportunities. 
          With features like real-time event tracking and closure management, 
          our platform ensures every initiative is executed with clarity and purpose.
      </Typography>
      <br/>
      <Typography 
        variant='h6'
        sx={{ flexGrow: 1,textAlign:'left' }} >
        "Bring your cause to life —
          <Link href="eventreg" underline="always">
            register your event and connect with passionate volunteers today."
          </Link>

      </Typography>
      <br /><br />
      <Typography
          variant='h5' 
          sx={{ flexGrow: 1,textAlign:'center' }}>
          Whether you're hosting or helping — join the movement. Sign up as an organiser or volunteer today!
      </Typography>
      
      <Link href="login" underline="always">
            Log in
      </Link>
    </div>
  )
}

export default HomePage
