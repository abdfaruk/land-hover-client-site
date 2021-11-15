import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://mighty-ridge-44167.herokuapp.com/addProduct', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        reset();
    };
    return (
        <div>
            <h1>Please give some data to add a product.</h1>
            <div className="form-style">
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="" placeholder="id" {...register("id")} />
                    <input defaultValue="" placeholder="image link" {...register("img")} />
                    <input defaultValue="" placeholder="Apartment Name" {...register("name")} />
                    <input defaultValue="" placeholder="Apartment Price" type='number' {...register("price")} />
                    <input defaultValue="" placeholder="Booking Address" {...register("address")} />
                    <input defaultValue="" placeholder="Apartment Details" {...register("description")} />
                    
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;