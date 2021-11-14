import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';



const About = () => {
    return (
       <Container sx={{mt:10}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography style={{color: 'black'}} variant='h2'>
                        Who We Are?
                        </Typography>
                        <Typography style={{color: 'black'}} variant='h5'>
                        Our membership is composed of residential and commercial brokers, salespeople, property managers, appraisers, counselors, and others engaged in the real estate industry. Members belong to one or more of approximately 1,200 local associations/boards and 54 state and territory associations of us.
                        Our term is a registered collective membership mark that identifies a real estate professional who is a member of the National Association of our company and subscribes to its strict Code of Ethics.
                        </Typography>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/explore'>
                            <Button variant="contained" style={{backgroundColor:'rgb(135, 221, 23)', marginTop:30, color:'black'}}>book your place</Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img className="about-img" src="https://previews.123rf.com/images/lyashenko/lyashenko1710/lyashenko171000037/88269150-happy-family-in-front-of-new-apartment-building.jpg" alt="" />
                    </Grid>
                </Grid>
            </Box>
       </Container>
    );
};

export default About;