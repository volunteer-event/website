import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Typography, IconButton, CardHeader, Card, Avatar, CardMedia, CardContent, CardActions, Collapse, styled, Grid, Button } from '@mui/material';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

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
            <Grid container spacing ={3}>
                {
                    events.map((val, i) => (
                    <Grid key={i} item sm={6} md={2}>
                        <Card>
                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
                            title={val.title}
                            subheader={`$${val.price}`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={val.thumbnail}
                            alt={val.title}
                        />
                        <CardContent>
                            <Typography>{val.description}</Typography>
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
