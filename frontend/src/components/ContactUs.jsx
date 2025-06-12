import { Card, CardContent, Stack, Typography } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <br /><br />
        <Typography variant='blody1' align='center'>
            We're here to assist you with any inquiries, support requests, 
            or collaborations.<br/>You may reach us using the details below or 
            connect with us via our official social media channels.
        </Typography>

        <Card sx={{ maxWidth: 400, margin: 'auto', border: '2px solid cadetblue', marginTop: 4, padding: 2 }}>
            <CardContent>
                <Stack spacing={2}>

                <Typography display="flex">
                    <CallOutlinedIcon sx={{ mr: 1 }} />
                    Tel: +91 8136493557
                </Typography>

                <Typography display="flex">
                    <EmailOutlinedIcon sx={{ mr: 1 }} />
                    customersupport@company.com
                </Typography>

                <Typography display="flex">
                    <LinkedInIcon sx={{ mr: 1 }} />
                    www.linkedin.com/in/company-name-8234
                </Typography>

                <Typography display="flex">
                    <InstagramIcon sx={{ mr: 1 }} />
                    www.instagram.com/in/company-name
                </Typography>

                <Typography display="flex">
                    <XIcon sx={{ mr: 1 }} />
                    www.twitter.com/in/company-name
                </Typography>

                </Stack>
        </CardContent>
</Card>


    </div>
  )
}

export default ContactUs
