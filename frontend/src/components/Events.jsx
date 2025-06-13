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
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const Events = () => {
    
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  var [events,setEvents] = useState([]);
    useEffect(() => {
            axios
            .get('https://dummyjson.com/products')
            .then((res) => {
                console.log(res.data);
                setEvents(res.data.products);
            })
            .catch((err) => console.log(err));
        }, [])

    return (
        <div>
          
            <Grid container spacing ={2}>
                {
                    events.map((val, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card>
                        <CardHeader
                            avatar={<Avatar 
                              src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png">
                            </Avatar>}
                            title={val.title}
                            subheader={`$${val.price}`}
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            image={val.thumbnail}
                            alt={val.title}
                            sx={{ objectFit: 'cover'}}
                         />
                        <CardContent>
                          <Link to="/registeration" style={{ textDecoration: 'none' }}>
                            <Button variant='contained' startIcon={<PersonAddAlt1Icon/>}>
                              Register
                            </Button>
                          </Link>
                            <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                              <CardContent>
                                <Typography sx={{ marginBottom: 2 }}>Event Details:</Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                  {val.description}
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
