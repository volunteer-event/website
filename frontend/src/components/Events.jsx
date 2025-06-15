import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Typography, IconButton, CardHeader, Card, Avatar, CardMedia, CardContent, CardActions, Collapse, styled, Grid, Button, Container } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Events = () => {
    
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:3000/events')
    .then((res) => setEvents(res.data))
    .catch((err) => console.log(err));
}, []);

  const handleExpandClick = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    return (
        <div>
          
            <Grid container spacing ={2}>
                {
                    events.map((val, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={val.id || i}>
                        <Card>
                        <CardHeader
                            avatar={<Avatar 
                              src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png">
                            </Avatar>}
                            title={val.EventName}
                            subheader={val.StartDateTime.slice(0,10)}
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            image={val.Poster}
                            alt= "poster"
                            sx={{ objectFit: 'cover'}}
                         />
                        <CardContent>
                          <Link to={`/registeration/${val._id}`} style={{ textDecoration: 'none' }}>
                          <Button variant='contained' startIcon={<PersonAddAlt1Icon/>}>
                            Register
                          </Button>
                          </Link>
                            <ExpandMore
                              expand={expandedCardIndex === i}
                              onClick={() => handleExpandClick(i)}
                              aria-expanded={expandedCardIndex === i}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                            <Collapse in={expandedCardIndex === i} timeout="auto" unmountOnExit>
                              <CardContent>
                                <Typography sx={{ marginBottom: 2 }}>Event Details:</Typography>
                                <Typography textAlign= 'left'sx={{ whiteSpace: 'pre-line', mb: 2 }}>
                                  {`• ContactInfo: ${val.ContactInfo}
                                  • EventName: ${val.EventName}
                                  • OrganisorName: ${val.OrganisorName}
                                  • EventDescription: ${val.EventDescription}
                                  • Category: ${val.Category}
                                  • Mode: ${val.Mode}
                                  • HostingCity: ${val.HostingCity}
                                  • StartDateTime: ${val.StartDateTime.slice(0, 10)}
                                  • EndDateTime: ${val.EndDateTime.slice(0,10)}
                                  • Deadline: ${val.Deadline.slice(0,10)}
                                  • MaxParticipant: ${val.MaxParticipant}
                                  • VolunteerQualification: ${val.VolunteerQualification}`}
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
    </div>
  )
}

export default Events
