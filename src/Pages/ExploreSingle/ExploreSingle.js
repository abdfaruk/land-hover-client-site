import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreSingle.css';

const ExploreSingle = ({explore}) => {
    const {id, name, description, img, address, price } = explore;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h1>$ {price}</h1>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="all-btn">Book in {address}</button>
            </Link>
        </div>
    );
};

export default ExploreSingle;