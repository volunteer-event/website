import { Typography } from '@mui/material'
import { Card, CardContent } from '@mui/material';
import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <br/>
        <Typography
            variant='h3' 
            sx={{ flexGrow: 1,textAlign:'center' }} 
            style={{
                fontFamily: 'aerial',
                fontWeight:600,
            }}>
            About Us
        </Typography>
        <br/>

        <Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2 }}>
          <CardContent>
            <Typography
                variant='h5' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                    fontFamily: 'aerial',
                    fontWeight: 'bold',
                    color: 'cadetblue'
                }}>
                Who We Are
            </Typography>

            <Typography
            variant='h6' 
            sx={{ flexGrow: 1,textAlign:'left' }} 
            style={{fontFamily:"aerial"}}>
            We are a team of passionate interns exploring the
            world of web development through hands-on, real-world projects.
            As part of our academic internship, we designed and built a Volunteer 
            Event Management System from the ground up to demonstrate our skills 
            in designing impactful and user-friendly web applications.
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2 }}>
            <CardContent>
                <Typography
                    variant="h5"
                    style={{
                        flexGrow: 1,
                        textAlign: 'left',
                        color: 'cadetblue',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                    }}>
                Why This Project
                </Typography>

                <Typography
                    variant='h6' 
                    sx={{ flexGrow: 1,textAlign:'left' }} 
                    style={{fontFamily:"aerial"}}>
                    Volunteer coordination is often handled manually, through social media posts, spreadsheets,
                    or informal communication.We saw this as an opportunity to create a digital platform that 
                    simplifies and streamlines the entire experience—for both organizers and volunteers.
                        <Typography variant='h6'
                            style={{fontFamily:"aerial"}}>
                            Our system provides a centralized space where:
                            <ul>
                                <li>Organizers can easily create, manage, and monitor events.</li>
                                <li>Volunteers can browse available opportunities and register based on their interests.</li>
                            </ul>
                </Typography>
            </Typography>

          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2 }}>
          <CardContent>
            <Typography
                variant='h5' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                    fontFamily: 'aerial',
                    fontWeight: 'bold',
                    color: 'cadetblue'
                }}>
                Our Approach
            </Typography>

            <Typography
                variant='h6' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{fontFamily:"aerial"}}>
                From initial planning to final deployment, we focused on building a responsive, 
                intuitive, and user-centered application. Special attention was given to performance, 
                accessibility, and design clarity to ensure a smooth and effective experience for all users.
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2 }}>
          <CardContent>
            <Typography
                variant='h5' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                    fontFamily: 'aerial',
                    fontWeight: 'bold',
                    color: 'cadetblue'
                }}>
                What We Learned
            </Typography>

            <Typography
                variant='h6' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{fontFamily:"aerial"}}>
                This project has been a valuable part of our learning journey. It helped us 
                apply theoretical knowledge in a practical setting, strengthened our skills 
                in full-stack development, and gave us real experience in problem-solving, 
                collaboration, and delivering meaningful software solutions.

                More than just a web application, this project reflects our growth as developers 
                and our ability to work as a team to bring an idea to life.
            </Typography>
         </CardContent>
        </Card>
        <br />
    </div>
  )
}

export default AboutUs
