import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';


const bannerBg ={
    background : `url("https://www.srijontechnologies.com/wp-content/uploads/2020/11/59-593279_real-estate-hd-wallpapers-real-estate-image-hd.jpg")`,
    height: '700px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop:16
}


const Banner = () => {
    return (
        <div style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{textAlign: 'left'}} item xs={12} md={6}>
                    <Box>
                        <Typography style={{marginTop:100, marginLeft:200, color: 'white'}} variant='h2'>
                        Discover a place you'll love to live
                        </Typography>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/explore'>
                            <Button variant="contained" style={{backgroundColor:'#3f9af0', marginTop:30, marginLeft:200}}>explore</Button>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;