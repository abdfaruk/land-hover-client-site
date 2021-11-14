import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ManageProduct = () => {
    const [explore, setExplore] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setExplore(data)
                setReload(false)
            });
    }, [reload])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteProducts/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReload(true)
        })
    }

    return (
        <Container>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            {
                 explore.map(e => <Grid item xs={6}> <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={e.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {e.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>handleDelete(e._id)} size="small">Delete</Button>
                    </CardActions>
                </Card> </Grid>)

             }
            </Grid>
        </Container>
    );
};

export default ManageProduct;