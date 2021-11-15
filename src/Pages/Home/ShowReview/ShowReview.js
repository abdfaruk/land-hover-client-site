import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ShowReview.css';

const ShowReview = () => {
    const [reviewInfo, setReviewInfo] = useState([]);

    useEffect( ()=>{
        fetch('https://mighty-ridge-44167.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviewInfo(data))
    },[])

    
    return (
        <Container sx={{marginTop:'50px', marginBottom:'20px'}}>
            <h1 className="review-title">OUR HAPPY CLIENT SAYS</h1>
           <div className="service-container">
                {
                    reviewInfo.map(e => <div className="review">
                        <img src="https://www.kindpng.com/picc/m/76-768103_customer-feedback-and-reviews-observablehq-logo-hd-png.png" alt="" />
                        <h2>{e.user_name}</h2>
                        <h3>{e.star} Star</h3>
                        <p className="px-3">{e.feedback}</p>
                    </div>)
                }
           </div>
        </Container>
    );
};

export default ShowReview;

