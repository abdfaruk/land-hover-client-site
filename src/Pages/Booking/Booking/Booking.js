import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Booking.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



const Booking = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                setServices(data)
            })
    }, [])
    
    const {user} = useAuth();
    const initialInfo = {name: user.displayName, email: user.email, phone: ''}
    const [bookingInfo , setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const {serviceId} = useParams();
    const selectedData = services?.find( e => e.id==serviceId)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
      const formData = {...data, ...selectedData}
      fetch('http://localhost:5000/bookingInfo', {
          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
      reset();
    };


    // console.log(selectedData);
    return (
        <Container sx={{mt:5}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={5}>
                    {
                        selectedData?.id && <div>
                            <Card sx={{ maxWidth: 545 }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={selectedData.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {selectedData.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {selectedData.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {selectedData.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                </CardActions>
                            </Card>
                        </div>
                    }
                    </Grid>
                    <Grid item xs={6} md={7}>
                    <div className="form-style">
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                            <input onBlur={handleOnBlur} defaultValue={user.displayName} {...register("name_1")} />
                            <input onBlur={handleOnBlur} defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input onBlur={handleOnBlur} placeholder="Your City" defaultValue="" {...register("city")} />
                            <input onBlur={handleOnBlur} placeholder="Your Phone Number" defaultValue="" {...register("phone")} />
                            <input type="submit" />
                        </form>
                    </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Booking;

    
