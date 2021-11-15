import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MakeReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = {...data}
        fetch('https://mighty-ridge-44167.herokuapp.com/review', {
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
    const {user} = useAuth();
    return (
        <div className="form-style">
            <h2>Please Make a Review</h2>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("user_name")} />
            <input defaultValue="" placeholder="Enter Your Feedback Hare" {...register("feedback")} />
            <input type="number" defaultValue="" placeholder="Star" {...register("star")} />

            <input type="submit" />
            </form>
        </div>
    );
};

export default MakeReview;